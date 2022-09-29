import axios from 'axios';
import { useEffect, useState } from 'react';
import BASE_URL from './AIBaseUrl';

const textContext = {
  natural: [
    'Natural interior design seeks to bring the outdoors in',
    'by incorporating natural and nature-inspired materials into the home.',
    'creating a look that is fresh, pure, authentic, and comfortable.',
    'Woven fabrics, wicker or rattan furniture and decor, and shades of green alongside',
    'nature-inspired neutrals are hallmarks of this wholesome and on-trend design style.',
  ],
  mediterranean: [
    'Mediterranean-style interior design is a riff on the décor',
    'found in countries that border the Mediterranean Sea.',
    'Whether you’re channeling a warm, carefree summer in Santorini, Capri, or Ibiza',
    'he best Mediterranean-style interior design focuses on indoor-outdoor living.',
    'Use materials such as wood, rattan, ceramics, terracotta, wrought iron, linen, and cotton',
  ],
  antique: [
    'Antiques offer style, history, and practicality to any room.',
    'Antiques evoke amazement and great interest in people, with questions',
    'like who made the furnishings, what great craftsmanship went into its creation,',
    'and what historical events have these pieces been through.',
    'Just their sheer beauty is enough to decorate',
    'with different styles in allowing the past to come to present day life.',
  ],
};

function AIStyle() {
  const file = null;
  const [style, setStyle] = useState(null);
  const imageUpload = async (e) => {
    let file = e.target.files[0];
    axios({
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
      url: BASE_URL + 'predict',
      method: 'post',
      data: { image: file },
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.predict[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {}, []);

  // 1. 이미지 백으로 보내기
  // ==> 응답 기다리기
  // ==> 스타일별 설명 text 랜더링

  // 2. 스타일 저장하기 요청 보내기
  // ==> 성공메세지 알람

  return (
    <div>
      <div>서비스 설명</div>
      <div>결과 </div>
      <img src={file ? file : null} alt="" />

      <input
        type="file"
        accept="image/*"
        name="img_file"
        onChange={(e) => imageUpload(e)}
      />
    </div>
  );
}

export default AIStyle;
