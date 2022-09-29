// npx gltfjsx pot.glb
import React , { useState } from 'react';
import { useCursor} from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export default function ModelT (props)  {
  const setTarget = props.setTarget
  
  const gltf = useLoader(GLTFLoader, props.objUrl );
  
  // this.model = gltf;
  const [hovered, setHovered] = useState(false)
  
 function clcikHandler(data){

  }

  useCursor(hovered)  
    
  return  (  <primitive  object={gltf.scene} {...props}  onClick={(e) => { props.addVector(e.object);e.stopPropagation(); setTarget(e.object);  clcikHandler(e.object);}} onPointerOver={(e) => {props.addVector(e.object); setHovered(true)}} onPointerOut={() => setHovered(false)}/>);
}
