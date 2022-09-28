// npx gltfjsx pot.glb
import React , { useState } from 'react';
import { useCursor} from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
// import { BoundaryView3D } from './BoundaryView3D.js';
import { Physical3DItem } from './Physical3DItem.js';
export default function ModelT (props)  {
  const setTarget = props.setTarget
 
  const gltf = useLoader(
    GLTFLoader,
    props.objUrl
    
  );
  gltf.scene.traverse( function ( child )
  {
      if ( child.isMesh )
      {
          const box = new THREE.Box3().setFromObject(child);

          const boxSize = box.getSize(new THREE.Vector3()).length();
        
          // console.log(boxSize);
          let boxmax = box.max;
          let boxmin = box.min;

          console.log();
          console.log('---boxmax---')
          console.log(boxmax);
          console.log('---boxmin---')
          console.log(boxmin);

          }
  } );

  
  // this.model = gltf;
  const [hovered, setHovered] = useState(false)
  
  // let floorplan = this.model.floorplan;
  // this.__boundaryRegion3D = new BoundaryView3D(this, this.floorplan, this.__options, this.floorplan.boundary);
  function clcikHandler(data){
    console.log('----data----')
    console.log(data.position)
    console.log('----data----')
    // console.log('boundingBox',data.objectboundingBox)
    // console.log('boxCenter',data.boxCenter)

    // console.log('target',target)
  }

  useCursor(hovered)  
    
  // return <primitive onClick={(e) => {setTarget(e.object)}} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} object={gltf.scene} scale={1} />;
  return  (
  <primitive  object={gltf.scene} {...props}  onClick={(e) => { e.stopPropagation(); setTarget(e.object); clcikHandler(e.object);}} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
  );
}
