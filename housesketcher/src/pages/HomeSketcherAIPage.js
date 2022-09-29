import Navbar from '../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import classes from './HomeSketcherAIPage.module.css';
import StyleBarChart from '../components/HomeSketcherAIPage/StyleBarChart';
import AIStyle from '../components/HomeSketcherAIPage/AIStyle';
import StyleRaderChart from '../components/HomeSketcherAIPage/StyleRaderChart';
import LoadingText from '../components/Common/LodingText';

function HomeSketcherAIPage() {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('StyleBarChart');
  const chartList = {
    StyleBarChart: 0,
    StyleRaderChart: 0,
    ColorBarChart: 0,
    ColorRaderChart: 0,
  };
  const responseDataHandler = async () => {
    setIsLoading(true);
    console.log('실행');
    await axios
      .get('auths/trend')
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data.ageStyle);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log('page', responseData);
  useEffect(() => {
    responseDataHandler();
  }, []);

  // 1. 이미지 백으로 보내기
  // ==> 응답 기다리기
  // ==> 스타일별 설명 text 랜더링

  // 2. 스타일 저장하기 요청 보내기
  // ==> 성공메세지 알람

  // 3. 실시간 인기 스타일 차트 보여주기
  if (!responseData) {
    return <LoadingText />;
  }

  return (
    <div>
      <Navbar />
      <div className={classes.justify_center}>
        <AIStyle />
        <StyleBarChart responseData={responseData.ageStyle} />
        <StyleRaderChart
          maleData={responseData.maleStyle}
          femaleData={responseData.femaleStyle}
        />
      </div>
    </div>
  );
}

export default HomeSketcherAIPage;
