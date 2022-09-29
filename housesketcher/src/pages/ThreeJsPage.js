import React, {useState, useMemo, useRef } from 'react';
import { Canvas, useThree  } from "react-three-fiber";
import { a, useSpring } from '@react-spring/three';
import FloorPlan from '../components/ThreeJsPage/FloorPlan';
import Ground from '../components/ThreeJsPage/Ground';

import  ModelT  from '../components/ThreeJsPage/Modelt';
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


export default function ThreeJsPage() {
  // let [currentFloor, setCurrentFloor] = useState(0);
  let currentFloor= 0;
  let [showCorners, setShowCorners] = useState(false);
  let [orthoCamera, setOrthoCamera] = useState(false);
  let [objList, setObjList] = useState([])
  let [objBox, setBox] =useState({ });


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
    } else {
      setX(5);
    }
  };
  const changeYHandler = () => {
    if (YYY.current.value !== undefined) {
      setY(parseInt(YYY.current.value));
    } else {
      setY(5);
    }
  };
  const changeHHandler = () => {
    if (HHH.current.value !== undefined) {
      setH(parseInt(HHH.current.value));
    } else {
      setH(1);
    }
  };
  let newItem = {
    floors: [
      {
        y: 0,
        doors: [],
        windows: [],
        rooms: [
          {
            id: 'ROOM2',
            height: H,
            coords: [
              { x: 0, y: 0 },
              { x: X, y: 0 },
              { x: X, y: Y },
              { x: 0, y: Y },
            ],
          },
          // {
          //   "id": "ROOM3",
          //   "height": H,
          //   "coords": [
          //     { "x": 0, "y": 0 },
          //     { "x": X/3, "y": 0 },
          //     { "x": X/3, "y": Y/5 },
          //     { "x": 0, "y": Y/5 }
          //   ]
          // }
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
  
  // Object Change Event Function
  function ObjectChangeHandler(props){
    const data = {}
    const box = new THREE.Box3().setFromObject(props);
    

    data[props.uuid] = box
    //  box 좌표 저장 
    setBox(prevState => ({
      ...prevState,
      [props.uuid]: box,
    }));

    const targetV = objBox[props.uuid]
    const targetMinV = targetV.min
    const targetMaxV = targetV.max
    for (const key in objBox) {

      
      let check1 = false
      let check2 = false
      let check3 = false
      let check4 = false
      let check5 = false
      let check6 = false
      let objecttMinV = objBox[key].min
      let objecttMaxV = objBox[key].max


      if ((objecttMinV.x < targetMaxV.x) &&(objecttMinV.z < targetMaxV.z) &&(objecttMaxV.x > targetMinV.x) &&(objecttMaxV.z > targetMinV.z)){
        check1 = true;
      }
      else if  ((objecttMinV.x < targetMaxV.x) &&(objecttMaxV.z > targetMinV.z) &&(objecttMaxV.x > targetMinV.x) &&(objecttMinV.z < targetMaxV.z)){
        check2 = true;
      }
      else if  ((objecttMaxV.x > targetMinV.x) &&(objecttMinV.z < targetMaxV.z) &&(objecttMinV.x < targetMaxV.x) &&(objecttMaxV.z > targetMinV.z)){
        check3 = true;
      }
      else if  ((objecttMaxV.x > targetMinV.x) &&(objecttMaxV.z > targetMinV.z) &&(objecttMinV.x < targetMaxV.x) &&(objecttMinV.z < targetMaxV.z)){
        check4 = true;
      }
      else{

      }
      if (((objecttMaxV.y > targetMinV.y) &&(objecttMinV.y < targetMaxV.y))  || ((objecttMinV.y < targetMaxV.y) &&(objecttMaxV.y > targetMinV.y))){
        check5 =true;
      }

      if ((-5.8 < targetMinV.x) &&(-4 < targetMinV.z)  && (-5.8+X > targetMaxV.x) &&(-4+Y > targetMaxV.z)){
        check6 =true;
      }
      

      if (check6){
        console.log('안에있지롱')
      }
      else{
        // alert("ㅋㅋㄹㅃㅃ 밖에 있지롱")
        // console.log(target.position.x)
        // console.log(target.position.y)
        // alert(target.position.x + " " + target.position.z)
        target.position.x = 0
        target.position.y = 0
        console.log(targetMaxV.z-targetMinV.z)
        target.position.z = -3.37502134416813 - (targetMaxV.z-targetMinV.z)
        console.log("난밖에있어 ")
      }

      // check1~check4 -> 사방위 충돌 체크 true이면 충돌 난 것
      // check5 -> 위 아래 충돌 체크 true이면 충돌 난 것(같은 높이)
      // check6 -> 방 내부에 있는지 체크. 얘는 false일 때 밖에 있음
      if ( (((check1 || check2 || check3 || check4) && (check5)) || (!check6) ) &&(props.uuid !==key) ){
        console.log('박스안')
        console.log(key)
        // window.alert('충돌충돌충돌'+key,)
        console.log('박스안')
      } 
      else{
        console.log('박스밖')
        console.log(key)
        console.log('박스밖')
      }

      check1=check2=check3=check4=check5=check6=false
    }

  }

  

  // console.log('targettargettarget', target)
  function ObjectClickHandler(props){
    console.log('ObjectClickHandlertt')
    console.log(props)
    const data = {}
    const box = new THREE.Box3().setFromObject(props);
    

    data[props.uuid] = box
    //  box 좌표 저장 
    setBox(prevState => ({
      ...prevState,
      [props.uuid]: box,
    }));

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
          {/* {objList.map((obj) => (
            <Model onPointerMissed={() => {setTarget(null);}} objUrl = {obj} setTarget = {setTarget} />
          ))
          } */}

          {objList.map((obj) => (
            // <ModelT onPointerMissed={() => {setTarget(null); clickobj(objList,obj);}} objUrl = {obj} addVector= {ObjectClickHandler} setTarget = {setTarget} />
            <ModelT onPointerMissed={() => {setTarget(null); }} objUrl = {obj}  setTarget = {setTarget} />
          ))
          }
          
          <Ground/>
          {/* <CameraSetup /> */}          
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

          {target && <TransformControls onChange={(e)=>{ObjectChangeHandler(target)}} object={target} mode={mode} />}
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
};
