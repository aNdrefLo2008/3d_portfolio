import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';
import Loader from "../Loader";
import { isMobile } from 'react-device-detect';

const Stars = (props) => {
  const ref = useRef();
  let sphere = random.inSphere(new Float32Array(1500 * 3), { radius: 1.2 });

  for (let i = 0; i < sphere.length; i++) {
    if (isNaN(sphere[i])) {
      sphere[i] = 0;
    }
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 10;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => {
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const isLowPerformance = isMobile && window.deviceMemory && window.deviceMemory < 4;

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setTimerExpired(true);
      }, 10000); // 10 seconds

      const handleScroll = () => {
        const starsCanvas = document.getElementById('starsCanvas');
        const starsCanvasPosition = starsCanvas?.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (starsCanvasPosition <= windowHeight) {
          setShouldRenderCanvas(true);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setShouldRenderCanvas(true);
    }
  }, []);

  return (
    <>
      {!shouldRenderCanvas && timerExpired ? (
        <div className="w-full h-auto absolute inset-0 z-[-1]" id="starsCanvas">
          <div>😞 The canvas didn't load. Scroll to load it.</div>
        </div>
      ) : (
        <div className="w-full h-auto absolute inset-0 z-[-1]" id="starsCanvas">
          <Canvas shadows={!isLowPerformance}
            frameloop={isLowPerformance ? 'demand' : 'always'}
            camera={{
              fov: isLowPerformance ? 60 : 45,
              near: 0.1,
              far: 200,
              position: [0, 0, 1]
            }}>
            <Suspense fallback={<Loader />}>
              <Stars />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      )}
    </>
  );
}

export default StarsCanvas;
