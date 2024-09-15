import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";
import { isMobile } from 'react-device-detect';

const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf', true, (error) => {
    console.error('Error loading Earth model:', error);
  });

  return (
    <primitive
      object={scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
}

const EarthCanvas = () => {
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const isLowPerformance = isMobile && window.deviceMemory && window.deviceMemory < 4;

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setTimerExpired(true);
      }, 10000); // 10 seconds

      const handleScroll = () => {
        const earthCanvas = document.getElementById('earthCanvas');
        const earthCanvasPosition = earthCanvas?.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (earthCanvasPosition <= windowHeight) {
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
        <div className="w-full h-auto absolute inset-0 z-[-1]" id="earthCanvas">
          <div>😞 The canvas didn't load. Scroll to load it.</div>
        </div>
      ) : (
        <div className="w-full h-auto absolute inset-0 z-[-1]" id="earthCanvas">
          <Canvas
            shadows={!isLowPerformance}
            frameloop={isLowPerformance ? 'demand' : 'always'}
            camera={{
              fov: isLowPerformance ? 60 : 45,
              near: 0.1,
              far: 200,
              position: [-4, 3, 6]
            }}
          >
            <Suspense fallback={<Loader />}>
              <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Earth />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      )}
    </>
  );
}

export default EarthCanvas;
