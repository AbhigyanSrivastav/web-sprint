import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Header from '../components/Header'
const Model = () => {
    const {scene} = useGLTF("/shoe.glb");
    return <primitive object={scene} scale={[2,2,2]} />;
}

export default function Home() {
  return (
    <>
    <div className='relative w-screen h-screen border'>
    <Header />
    <Canvas className='absolute top-0 left-0 w-full h-full'>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
      <OrbitControls enableZoom={false} />
    </Canvas>
    </div>
    </>
  )
}
