import React, {useState, useMemo, useRef } from 'react';
import { Canvas, useThree  } from "react-three-fiber";
import { a, useSpring } from '@react-spring/three';
import FloorPlan from '../components/ThreeJsPage/FloorPlan';
import Ground from '../components/ThreeJsPage/Ground';

import  ModelT  from '../components/ThreeJsPage/Modelt';
import  CameraSetup  from '../components/ThreeJsPage/CameraSetup';
import { DISTANCE_BETWEEN_FLOORS } from '../components/ThreeJsPage/constants';
import classes from './ThreeJsPage.module.css';

///////////////////////
import create from 'zustand'
import {  OrbitControls, TransformControls } from '@react-three/drei'
import { useControls } from 'leva'
import Liked from '../components/ThreeJsPage/Liked';
import * as THREE from 'three';
//////////////////////

const DevTools = () => {
  const { scene, renderer } = useThree();

  new CustomEvent('observe', { detail: renderer });
  new CustomEvent('observe', { detail: scene });

  return null;
};


const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }))

// ThreeJsPage 
export default function ThreeJsPage() {
  let currentFloor= 0;
  let [showCorners, setShowCorners] = useState(false);
  let [orthoCamera, setOrthoCamera] = useState(false);
  let [objList, setObjList] = useState([]);

  
  // 가구 obj 더해주기 
  const addobjListHandler = (objUrl) => {
    setObjList(
      [...objList, objUrl]
      )
    }
    
    
  let [X, setX] = useState(0);
  let [Y, setY] = useState(0);
  let [H, setH] = useState(0);
  const XXX = useRef();
  const YYY = useRef();
  const HHH = useRef();
  


  const changeXHandler = () => {
    console.log(objList)
    if (XXX.current.value !== undefined) {
      setX(parseInt(XXX.current.value));
    }
  };
  const changeYHandler = () => {
    if (YYY.current.value !== undefined) {
      setY(parseInt(YYY.current.value));
    }
  };
  const changeHHandler = () => {
    if (HHH.current.value !== undefined) {
      setH(parseFloat(HHH.current.value));
    }
  };
  let roomMain = {
    id: 'roomMain',
    height: H,
    coords: [
      { x: 0, y: 0 },
      { x: X, y: 0 },
      { x: X, y: Y },
      { x: 0, y: Y },
    ],
  }

  let newItem = {
    floors: [
      {
        y: 0,
        doors: [],
        windows: [],
        rooms: [
          roomMain,
        ],
      },
    ],
  };
  let animatedFloorPosition = useFloorTransitionAnimation({
    floors: newItem.floors,
    currentFloor,
  });
  ////


  const { target, setTarget } = useStore()
  const { mode } = useControls({ mode: { value: 'translate', options: ['translate', 'rotate', 'scale'] } })
  /////

  //checkIntersect -> 충돌 확인, true일때 충돌난 경우

  // objBox에 setBox를 이용해서 box들을 json 형태로 저장한다.
  let [objBox, setBox] =useState({ });
  
  //isCollison : 충돌 발생 여부  | setIsCollison : isCollison 토글 시키는 함수

  
  let [preX, setpreX] = useState(0.0);
  let [preY, setpreY] = useState(0.0);
  let [preZ, setpreZ] = useState(0.0);
  let [preXYZ, setpreXYZ] = useState([]);


  
  function ObjectChangeHandler(props){
    const box = new THREE.Box3().setFromObject(props); // 현재 박스

    // setBox -> objBox 리스트. 가구 box들을 저장하는 리스트. 현재 위치를 업데이트 해 줌.
    setBox(prevState => ({
          ...prevState,
          [props.uuid]: box,
        }));
    
    // Check collision box -> 충돌 확인
    for (const key in objBox) {
      console.log("key ============ ",key)
      if(props.uuid !==key){ // 자기 자신 아닌 경우
        if (box.intersectsBox(objBox[key])){ // 충돌이 발생한 경우
          console.log("충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌충돌")
          console.log(preXYZ.x)
          console.log(preXYZ.y)
          console.log(preXYZ.z)
          // target.position.x = preXYZ.x
          // target.position.y = preXYZ.y
          // target.position.z = preXYZ.z
          target.position.x = preX
          target.position.y = preY
          target.position.z = preZ
          // break // 충돌 했으니 for문 탈출
        }
        if (-5.8 > props.position.x){
          target.position.x = preX
        }
        // } &&(-4 < targetMinV.z)  && (-5.8+X > targetMaxV.x) &&(-4+Y > targetMaxV.z)){
        //   check6 =true;
        // }
  
      }
    }

    setpreX(target.position.x)
    setpreY(target.position.y)
    setpreZ(target.position.z)
    setpreXYZ([...preXYZ, target.position] )
    
  }
  
  return (
    <div className={classes.three_body}>

        {/* 가구 UX 창 */}
        <div className={classes.LeftItems}>
          <div>
            <Liked addObj = {addobjListHandler}/>          
            <h1>{mode}</h1>
          </div>
        </div>

        <div className={classes.RightItems}>
        <Canvas   
        // onPointerMissed = 밖에 클릭시 target null로 만들기 
          key={`isometric-${orthoCamera}`}
          orthographic={orthoCamera}
          invalidateframeloop="false">
          {/* 가구 3D 모델 */}
          {objList.map((obj) => (
            <ModelT onPointerMissed={() => {setTarget(null); }} objUrl = {obj}  setTarget = {setTarget} />
          ))
          }
          
          {/* <Ground/> */}
          <CameraSetup />          
          <ambientLight intensity={0.5} color="#eef" />
          <pointLight position={[20, 10, -10]} decay={1} castShadow={true} />
          <pointLight position={[-20, 20, 5]} decay={1} castShadow={true} />

          <a.group position={animatedFloorPosition} style ={{zIndex : 1}}>
            <FloorPlan
              interactiveFloors={[currentFloor]}
              data={newItem}
              showCorners={showCorners}               
              />
          </a.group>

          {target && <TransformControls onChange={(e) => { ObjectChangeHandler(target); }} object={target} mode={mode} />}
          <OrbitControls makeDefault />
          <DevTools />
        </Canvas>
      <div>
        



        {/* 뷰 + 코너 확인 */}
        <div className={`${classes.controls} ${classes.perspectiveControls}`}>
          <div>
            <label htmlFor="isometricView">Isometric View</label>
            <input
              name="isometricView"
              type="checkbox"
              checked={orthoCamera}
              onChange={() => setOrthoCamera(!orthoCamera)}
            />
          </div>
          <div>
            <label htmlFor="showCorners">show corners</label>
            <input
              name="showCorners"
              type="checkbox"
              checked={showCorners}
              onChange={() => setShowCorners(!showCorners)}
            />
          </div>
        </div>


        {/* 방 수치 입력 */}
        <div className={classes.help} >
          <form>
            <label htmlFor="xx">X</label>
            <input id="xx" ref={XXX} onChange={changeXHandler} />
            <label htmlFor="yy">Y</label>
            <input id="yy" ref={YYY} onChange={changeYHandler} />
            <label htmlFor="hh">H</label>
            <input id="hh" ref={HHH} onChange={changeHHandler} />
          </form>
        </div>



        <div className={`${classes.controls} ${classes.doorControls}`}>
          {newItem.floors[currentFloor].doors
            .filter(({ direction }) => direction !== 0)
            .map(({ id }) => (
              <div key={id}>
                <label htmlFor={`door-${id}`}>{id} door</label>
                <input name={`door-${id}`} type="checkbox" />
              </div>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
}

const useFloorTransitionAnimation = ({ floors, currentFloor }) => {
  let currentFloorY = useMemo(() => {
    return floors
      .slice(0, currentFloor + 1)
      .reduce((y, floor, index) => y + DISTANCE_BETWEEN_FLOORS * index, 0);
  }, [floors, currentFloor]);

  const { position } = useSpring({
    position: [0, -currentFloorY, 0],
    config: { mass: 6, tension: 500, friction: 100, precision: 0.0001 },
  });

  return position;
}
