import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import "./HeroScene3D.css";

const Model = () => {
  const { scene } = useGLTF("/models/scene.glb");

  return <primitive object={scene} scale={1.5} />;
};

const HeroScene3D = () => {
  return (
    <div className="hero-scene">
      <Canvas camera={{ position: [0, 0, 4] }}>
        {/* lights */}
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[2, 2, 2]}
          intensity={1.5}
        />

        <directionalLight
          position={[-2, -1, -2]}
          intensity={0.8}
          color="#22d3ee"
        />

        {/* GLTF MODEL */}
        <Model />

        {/* controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;