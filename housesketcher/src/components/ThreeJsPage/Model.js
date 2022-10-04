// npx gltfjsx pot.glb
import React , { useState } from 'react';
import { useCursor} from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



export default function Model (props)  {
  const setTarget = props.setTarget
 
  const gltf = useLoader(
    GLTFLoader,
    props.objUrl
  );

  
  const [hovered, setHovered] = useState(false)

  function clcikHandler(data){
    
    props.setTarget(data)  
    
    // console.log('target',target)
  }

  useCursor(hovered)  
  
  // return <primitive onClick={(e) => {setTarget(e.object)}} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} object={gltf.scene} scale={1} />;
  return  (
  <primitive  object={gltf.scene} {...props}  onClick={(e) => { e.stopPropagation(); setTarget(e.object); clcikHandler(e.object);}} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
  );
}
