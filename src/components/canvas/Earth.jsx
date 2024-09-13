import { Suspense, useState } from "react";
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
  const [loadError, setLoadError] = useState(false);
  const isLowPerformance = isMobile && window.deviceMemory && window.deviceMemory < 4; // Example check for low-memory devices


  return (
    <>
      {loadError ? (
        <div className="error-message">
          Failed to load Earth model.
        </div>
      ) : (
        <Canvas
          shadows={!isLowPerformance}
          frameloop={isLowPerformance ? 'demand' : 'always'}
          camera={{ 
            fov: isLowPerformance ? 60 : 45,  // Wider FOV for older devices
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
      )}
    </>
  );
}

export default EarthCanvas;
