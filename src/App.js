import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from 'drei'

function Model(props) {
  const { scene } = useLoader(GLTFLoader, '/excavator.gltf')
  return <primitive object={scene} {...props} />
}

export default function App() {
  return (
    <Canvas colorManagement invalidateFrameloop pixelRatio={window.devicePixelRatio} camera={{ position: [-5, 5, 10] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* <directionalLight position={[-10, -10, -5]} intensity={2} color="red" /> */}
      <Suspense fallback={<Html>loading..</Html>}>
        <Model position={[0, -4.5, 0]} rotation={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  )
}
