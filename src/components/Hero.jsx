import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const model = useGLTF('/assets/profile3D.glb');
  return <primitive object={model.scene} scale={1.5} />;
}

function Hero() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Hero;
