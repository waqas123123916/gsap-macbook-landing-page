import React from 'react'
import useMacbookStore from '../store';
import clsx from 'clsx';
import { Box, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import MackbookModel14 from './models/Macbook-14';

const ProductViewer = () => {
    const {color,scale,setColor,setScale}=useMacbookStore();
  return (
   <section id='product-viewer'>
    <h2>Take a closer look.</h2>
  <div className="controls">
      <p className='info'>
        MacbookPro {scale} in {color}
    </p>

    <div className="flex-center gap-5 mt-">
        <div className="color-control">
            <div onClick={()=>setColor('#adb5bd')} className={clsx('bg-neutral-300',color === '#adb5bd' && 'active')}/>
            <div onClick={()=>setColor('#2e2c2e')} className={clsx('bg-neutral-900',color === '#2e2c2e' && 'active')}/>
        </div>
        <div className="size-control">
            <div onClick={()=>setScale(0.06)} className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent')} ><p>14"</p></div>
            <div onClick={()=>setScale(0.08)} className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent')} ><p>16"</p></div>
        </div>
    </div>
  </div>
  <Canvas id="canvas" camera={{position:[0,2,5], fov:50, near:0.1,far:100}}>
    {/* <Box position={[0,0,0]} scale={10*scale} material-color={color} ></Box> */}
    <ambientLight intensity={9}/>
    <MackbookModel14 scale={0.06} position={[0,0,0]} />
    <OrbitControls enableZoom={false} />
  </Canvas>
   </section>
  )
}

export default ProductViewer