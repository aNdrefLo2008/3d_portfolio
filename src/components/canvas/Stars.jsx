import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';
import Loader from "../Loader";  // Assume you have a loader component

const Stars = (props) => {
  const ref = useRef();

  // Generate positions using random.inSphere
  let sphere = random.inSphere(new Float32Array(1500 * 3), { radius: 1.2 }); // 1500 points * 3 (x, y, z)

  // Validate positions to avoid NaN issues
  for (let i = 0; i < sphere.length; i++) {
    if (isNaN(sphere[i])) {
      sphere[i] = 0;  // Replace NaN values with 0 or a valid number
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
  const [loadError, setLoadError] = useState(false);

  return (
    <>
      {loadError ? (
        <div className="error-message">
          Failed to load Stars model.
        </div>
      ) : (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 0, 1] }}>
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
