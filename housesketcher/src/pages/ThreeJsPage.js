import React, {useEffect ,useContext, useState, useReducer, useMemo, useRef, Suspense } from 'react';
import { Canvas, useThree, useFrame  } from "react-three-fiber";
import { a, useSpring } from '@react-spring/three';
import { useHistory } from 'react-router-dom';
// import data from '../components/ThreeJsPage/floplan-data.json';
import CameraSetup from '../components/ThreeJsPage/CameraSetup';
import FloorPlan from '../components/ThreeJsPage/FloorPlan';
import FloorClip from '../components/ThreeJsPage/FloorClip';

import  Model  from '../components/ThreeJsPage/Model';
import { DISTANCE_BETWEEN_FLOORS } from '../components/ThreeJsPage/constants';
import classes from './ThreeJsPage.module.css';

///////////////////////
import { useLoader } from "@react-three/fiber";
import create from 'zustand'
import { Environment, OrbitControls, TransformControls, Html, useProgress } from '@react-three/drei'
import { useControls } from 'leva'
import { useGLTF, useCursor} from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Liked from '../components/ThreeJsPage/Liked';
import Staged from '../components/ThreeJsPage/Staged';
import axios from '../utils/axios';
import AuthContext from '../context/AuthContext';
import RecomFurn from '../components/ThreeJsPage/RecomFurn';
import ItemUX from '../components/ThreeJsPage/ItemUX';
import ClipLoader from "react-spinners/ClipLoader";
import CustomScroll from 'react-custom-scroll'
import { button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//////////////////////

const DevTools = () => {
  
  const { scene, renderer } = useThree();

  new CustomEvent('observe', { detail: renderer });
  new CustomEvent('observe', { detail: scene });

  return null;
};

// 1. Glb 파일 로딩 
// function Loader() {
//   const { active, progress, errors, item, loaded, total } = useProgress();
//   return <Html center>{progress} % loaded</Html>;
// }

// const Model = () => {
//   const gltf = useLoader(
//     GLTFLoader,
//     'https://firebasestorage.googleapis.com/v0/b/homesketcher-37070.appspot.com/o/glb%2Fdesks.glb?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjIxZTZjMGM2YjRlMzA5NTI0N2MwNjgwMDAwZTFiNDMxODIzODZkNTAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoia21TZWNvbmQiLCJwaWN0dXJlIjoiaHR0cDovL3d3dy5leGFtcGxlLmNvbS8xMjM0NTY3OC9waG90by5wbmciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaG9tZXNrZXRjaGVyLTM3MDcwIiwiYXVkIjoiaG9tZXNrZXRjaGVyLTM3MDcwIiwiYXV0aF90aW1lIjoxNjY0MjQ2Njk5LCJ1c2VyX2lkIjoiZzVnNzJuU1ZmWWd0ZVJBQ3UzWHNTTVBDTzVGMyIsInN1YiI6Imc1ZzcyblNWZllndGVSQUN1M1hzU01QQ081RjMiLCJpYXQiOjE2NjQyNDY2OTksImV4cCI6MTY2NDI1MDI5OSwiZW1haWwiOiJqbzk1MTEyOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX251bWJlciI6Iis4MjEwNjQ4NTU3OTQiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4MjEwNjQ4NTU3OTQiXSwiZW1haWwiOlsiam85NTExMjhAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.jbsBNl9xzkPZTEuO3NID7cbC4QINFcka5o73QyUP4_rt-9V4iRUO19eVp1JVSjs-16xToS-9xZgVQ8--j9-Cv_8ihku2veGrqNoXSX2U_Z-GrPg0DcjrR0MY8oof6-ZofCjt-Dqhe1twVbD1ijmTXl28ISs8eVG8LoyVbppkvFJq5TmV1Mh5wiMz6Y4LgPSW_CcJY5RwDTapA5oxkP_psALDr1Iopz_ADZNymW_dOPbGkbOqJHqk0PgEFz6gzcvJcpDJwIZupvia71q6cdmb_tVuy2Tu7_0Uk88r_2YHnNrC3bBGxhotWCoVFF11SF_UBGztJRBI_JBYRZqL-PFuvA'
//   );
//   return <primitive object={gltf.scene} scale={0.4} />;
// };
const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }))

// 가구 3D 모델 생성?
// function ModelT(props) {

//   const gltf = useLoader(
//     GLTFLoader,
//     props.objUrl
//     );;
//   const setTarget = useStore((state) => state.setTarget)
//   const [hovered, setHovered] = useState(false)

//   function clcikHandler(data){
//     console.log('------------')
//     console.log('data',data)
//     setTarget(data)
//     console.log('------------')
//     console.log('setTargetsetTargetsetTarget',data)
//     console.log('------------')
//     // console.log('target',target)
//   }
//   useCursor(hovered)
//   return (
//   // <mesh {...props} onClick={(e) => {setTarget(e.object); clcikHandler(e.object)}} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
//   //     </mesh>
//   <primitive  object={gltf.scene}  {...props} onClick={(e) => {setTarget(e.object); clcikHandler(e.object)}} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
//   );
// }

export default function ThreeJsPage() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  // let [currentFloor, setCurrentFloor] = useState(0);
  let { BASE_URL } = useContext(AuthContext);
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );
  let currentFloor= 0;
  let [showCorners, setShowCorners] = useState(false);
  let [orthoCamera, setOrthoCamera] = useState(false);
  let [objList, setObjList] = useState([])
  let [recomList, setRecomList] = useState([])

  const getRecomFurnitures = async () => {
    await axios({
      method: 'get',
      url: BASE_URL + 'furnitures/3d/furniture/',
      headers: {
        Authorization: `Bearer ${authTokens.access}`,
      },
    }).then (
      (response) => {
        setRecomList(Object.entries(response.data))
        console.log('recomList', recomList);
      }
    ).catch((err) => {
      console.log(err);
    });
  }

  let totalcost = 0
  objList.forEach((obj) => {
    totalcost += obj.furniture_price
  })

  useEffect(() => {
    getRecomFurnitures();
    setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
  }, [])

  // 가구 obj 더해주기 
  const addobjListHandler = (objUrl) => {
    console.log(objUrl);
    if ( objList.includes(objUrl)){
      console.log(' 중복');
    }else {
      setObjList(
         [...objList, objUrl]
      )
      console.log('위의 것을 넣습니다.');
    }
  }

  // 가구 obj 제거하기 
  const removeobjListHandler = (objUrl) => {
    console.log('remove', objUrl);
    setObjList(
      objList.filter(obj => obj.id !== objUrl.id)
    )

  }

  
  let [X, setX] = useState(0);
  let [Y, setY] = useState(0);
  let [H, setH] = useState(0);
  const XXX = useRef();
  const YYY = useRef();
  const HHH = useRef();

  const changeXHandler = () => {
    if (XXX.current.value !== undefined) {
      setX(XXX.current.value);
    } else {
      setX(5);
    }
  };
  const changeYHandler = () => {
    if (YYY.current.value !== undefined) {
      setY(YYY.current.value);
    } else {
      setY(5);
    }
  };
  const changeHHandler = () => {
    if (HHH.current.value !== undefined) {
      setH(HHH.current.value);
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
          {
            "id": "ROOM3",
            "height": H,
            "coords": [
              { "x": 0, "y": 0 },
              { "x": X/3, "y": 0 },
              { "x": X/3, "y": Y/5 },
              { "x": 0, "y": Y/5 }
            ]
          }
        ],
      },
    ],
  };
  let animatedFloorPosition = useFloorTransitionAnimation({
    floors: newItem.floors,
    currentFloor,
  });
  ////
  const exitHandler = () => {
    history.push('/')
  }


  const { target, setTarget } = useStore()
  const { mode } = useControls({ mode: { value: 'translate', options: ['translate', 'rotate', 'scale'] } })
  /////
  
  console.log('targettargettarget', target)
  const [isOpen, setMenu] = useState(true)
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); // on,off 개념 boolean
}

  return (
    <div className={classes.three_body} >
        {/* 가구 UX 창 */}
      
          <div className={classes.LeftItems} style = {{ overflowY : 'scroll' }}>
          <div style={{ padding : '30px' }}>
            <div style={{display : 'flex'}}>
            
            <DropdownButton
            as={ButtonGroup}
            key= 'Warning'
            id={`dropdown-variants-Warning`}
            variant={'Warning'.toLowerCase()}
            title='Room List'
            style={{ width : '45%'}}
          >
            <Dropdown.Item eventKey="1">Room #1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Room #2</Dropdown.Item>
            <Dropdown.Item eventKey="3">Room #3</Dropdown.Item>          
          </DropdownButton>

           <button style={{ width: '45%', marginLeft: '40px'}}>Make room </button>
            </div>                      
            <br />
            <br />
            <button style={{ width: '100%'}}>Staged Furnitures</button>
            <Staged furnitures = {objList} removeObj ={removeobjListHandler}/>
            <br />
            <div style={{display : 'flex', justifyContent: 'center'}}>
              Total Cost : {totalcost} $
            </div>
            <br />


            {loading? 
            <b>
            <div style={{display :'flex', justifyContent: 'center'}}>
                <h3>Setting for</h3>          
            </div>
            <div style={{display :'flex', justifyContent: 'center'}}>
                <h3>Your furnitures</h3>
            </div>
            <div style={{display :'flex', justifyContent: 'center'}}>
                <ClipLoader color={'#F3CD58'} loading={loading}  size={50} />
                
            </div>

            </b>
            :
            null            
            }
            
            <button onClick={()=>toggleMenu()} style={{ width: '100%', marginBottom: '1px' , display : loading? 'none' : null}}>Liked Furnitures</button>
            {loading? null : <div>
              {
                isOpen? <Liked addObj = {addobjListHandler}/> : null    

              }

            </div>
              } 
            {recomList.map(([key, value]) => (
              <div  key = {key} style ={{ marginBottom: '1px', display : loading? 'none' : null}}>
                <ItemUX furnkey = {key} furnvalue = {value} addobjHandler = {addobjListHandler}/>
                {/* <button style={{ width: '100%'}}>{key}</button>
                <RecomFurn addObj = {addobjListHandler} furnitures = {value}/> */}
              </div>             
            
            )

            )}
            <br />            
            <button onClick={exitHandler}>Exit</button>  
                         

          </div>
          </div>

      

        <div className={classes.RightItems} style = {{ backgroundColor : '#E3E8EC'}}>
        <Canvas   
        // onPointerMissed = 밖에 클릭시 target null로 만들기 
          key={`isometric-${orthoCamera}`}
          orthographic={orthoCamera}
          invalidateframeloop="false">

          {/* 가구 3D 모델 */}
          {objList.map((obj) => (
            <Model onPointerMissed={() => setTarget(null)} objUrl = {obj.glb_url} setTarget = {setTarget} />
          ))
          }

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

          <FloorClip currentFloor={currentFloor} data={newItem} />
          {target && <TransformControls object={target} mode={mode} />}
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