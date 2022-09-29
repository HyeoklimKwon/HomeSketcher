import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import axios from '../../utils/axios';

// 사용 라이브러리 : https://nivo.rocks/
// 참고 블로그 : https://jforj.tistory.com/269

const DataChart = () => {
  // 3. 실시간 인기 스타일 차트 보여주기
  const [responseData, setResponseData] = React.useState(null);
  const [isloading, setIsloading] = React.useState(true);
  let data = [
    {
      country: 'Mediterranean',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(19, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(286, 70%, 50%)',
      thirites: 139,
      thiritesColor: 'hsl(160, 70%, 50%)',
      forties: 24,
      fortiesColor: 'hsl(273, 70%, 50%)',
      fifties: 45,
      fiftiesColor: 'hsl(119, 70%, 50%)',
      sixties: 86,
      sixtiesColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Antique',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(72, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(53, 70%, 50%)',
      thirites: 196,
      thiritesColor: 'hsl(231, 70%, 50%)',
      forties: 125,
      fortiesColor: 'hsl(118, 70%, 50%)',
      fifties: 117,
      fiftiesColor: 'hsl(164, 70%, 50%)',
      sixties: 68,
      sixtiesColor: 'hsl(205, 70%, 50%)',
    },
    {
      country: 'Natural',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(101, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(208, 70%, 50%)',
      thirites: 180,
      thiritesColor: 'hsl(237, 70%, 50%)',
      forties: 136,
      fortiesColor: 'hsl(156, 70%, 50%)',
      fifties: 57,
      fiftiesColor: 'hsl(332, 70%, 50%)',
      sixties: 84,
      sixtiesColor: 'hsl(121, 70%, 50%)',
    },
    {
      country: 'Provence',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(340, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(314, 70%, 50%)',
      thirites: 137,
      thiritesColor: 'hsl(31, 70%, 50%)',
      forties: 53,
      fortiesColor: 'hsl(275, 70%, 50%)',
      fifties: 80,
      fiftiesColor: 'hsl(19, 70%, 50%)',
      sixties: 156,
      sixtiesColor: 'hsl(50, 70%, 50%)',
    },
    {
      country: 'Modern',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(56, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(357, 70%, 50%)',
      thirites: 113,
      thiritesColor: 'hsl(253, 70%, 50%)',
      forties: 144,
      fortiesColor: 'hsl(46, 70%, 50%)',
      fifties: 165,
      fiftiesColor: 'hsl(93, 70%, 50%)',
      sixties: 102,
      sixtiesColor: 'hsl(27, 70%, 50%)',
    },
    {
      country: 'North European',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(265, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(287, 70%, 50%)',
      thirites: 159,
      thiritesColor: 'hsl(135, 70%, 50%)',
      forties: 25,
      fortiesColor: 'hsl(273, 70%, 50%)',
      fifties: 42,
      fiftiesColor: 'hsl(257, 70%, 50%)',
      sixties: 70,
      sixtiesColor: 'hsl(13, 70%, 50%)',
    },
    {
      country: 'Minimal',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(205, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(356, 70%, 50%)',
      thirites: 6,
      thiritesColor: 'hsl(182, 70%, 50%)',
      forties: 62,
      fortiesColor: 'hsl(15, 70%, 50%)',
      fifties: 68,
      fiftiesColor: 'hsl(103, 70%, 50%)',
      sixties: 75,
      sixtiesColor: 'hsl(183, 70%, 50%)',
    },
    {
      country: 'Vintage',
      zeroTo19: 1,
      zeroTo19Color: 'hsl(205, 70%, 50%)',
      twenites: 1,
      twenitesColor: 'hsl(356, 70%, 50%)',
      thirites: 6,
      thiritesColor: 'hsl(182, 70%, 50%)',
      forties: 62,
      fortiesColor: 'hsl(15, 70%, 50%)',
      fifties: 68,
      fiftiesColor: 'hsl(103, 70%, 50%)',
      sixties: 75,
      sixtiesColor: 'hsl(183, 70%, 50%)',
    },
  ];

  async function getData() {
    await axios
      .get('auths/trend')
      .then((response) => {
        setResponseData(response.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(responseData);
  if (responseData) {
    data = [
      {
        country: 'Mediterranean',
        zeroTo19: responseData.ageStyle[0][0].user_style__count,
        zeroTo19Color: 'hsl(19, 70%, 50%)',
        twenites: responseData.ageStyle[20][0].user_style__count,
        twenitesColor: 'hsl(286, 70%, 50%)',
        thirites: responseData.ageStyle[30][0].user_style__count,
        thiritesColor: 'hsl(160, 70%, 50%)',
        forties: responseData.ageStyle[40][0].user_style__count,
        fortiesColor: 'hsl(273, 70%, 50%)',
        fifties: responseData.ageStyle[50][0].user_style__count,
        fiftiesColor: 'hsl(119, 70%, 50%)',
        sixties: responseData.ageStyle[60][0].user_style__count,
        sixtiesColor: 'hsl(86, 70%, 50%)',
        seventies: responseData.ageStyle[70][0].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
      {
        country: 'Antique',
        zeroTo19: responseData.ageStyle[0][1].user_style__count,
        zeroTo19Color: 'hsl(72, 70%, 50%)',
        twenites: responseData.ageStyle[20][1].user_style__count,
        twenitesColor: 'hsl(53, 70%, 50%)',
        thirites: responseData.ageStyle[30][1].user_style__count,
        thiritesColor: 'hsl(231, 70%, 50%)',
        forties: responseData.ageStyle[40][1].user_style__count,
        fortiesColor: 'hsl(118, 70%, 50%)',
        fifties: responseData.ageStyle[50][1].user_style__count,
        fiftiesColor: 'hsl(164, 70%, 50%)',
        sixties: responseData.ageStyle[60][1].user_style__count,
        sixtiesColor: 'hsl(205, 70%, 50%)',
        seventies: responseData.ageStyle[70][1].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
      {
        country: 'Natural',
        zeroTo19: responseData.ageStyle[0][2].user_style__count,
        zeroTo19Color: 'hsl(101, 70%, 50%)',
        twenites: responseData.ageStyle[20][2].user_style__count,
        twenitesColor: 'hsl(208, 70%, 50%)',
        thirites: responseData.ageStyle[30][2].user_style__count,
        thiritesColor: 'hsl(237, 70%, 50%)',
        forties: responseData.ageStyle[40][2].user_style__count,
        fortiesColor: 'hsl(156, 70%, 50%)',
        fifties: responseData.ageStyle[50][2].user_style__count,
        fiftiesColor: 'hsl(332, 70%, 50%)',
        sixties: responseData.ageStyle[60][2].user_style__count,
        sixtiesColor: 'hsl(121, 70%, 50%)',
        seventies: responseData.ageStyle[70][2].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
      {
        country: 'Provence',
        zeroTo19: responseData.ageStyle[0][3].user_style__count,
        zeroTo19Color: 'hsl(340, 70%, 50%)',
        twenites: responseData.ageStyle[20][3].user_style__count,
        twenitesColor: 'hsl(314, 70%, 50%)',
        thirites: responseData.ageStyle[30][3].user_style__count,
        thiritesColor: 'hsl(31, 70%, 50%)',
        forties: responseData.ageStyle[40][3].user_style__count,
        fortiesColor: 'hsl(275, 70%, 50%)',
        fifties: responseData.ageStyle[50][3].user_style__count,
        fiftiesColor: 'hsl(19, 70%, 50%)',
        sixties: responseData.ageStyle[60][3].user_style__count,
        sixtiesColor: 'hsl(50, 70%, 50%)',
        seventies: responseData.ageStyle[70][3].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
      {
        country: 'Modern',
        zeroTo19: responseData.ageStyle[0][4].user_style__count,
        zeroTo19Color: 'hsl(56, 70%, 50%)',
        twenites: responseData.ageStyle[20][4].user_style__count,
        twenitesColor: 'hsl(357, 70%, 50%)',
        thirites: responseData.ageStyle[30][4].user_style__count,
        thiritesColor: 'hsl(253, 70%, 50%)',
        forties: responseData.ageStyle[40][4].user_style__count,
        fortiesColor: 'hsl(46, 70%, 50%)',
        fifties: responseData.ageStyle[50][4].user_style__count,
        fiftiesColor: 'hsl(93, 70%, 50%)',
        sixties: responseData.ageStyle[60][4].user_style__count,
        sixtiesColor: 'hsl(27, 70%, 50%)',
        seventies: responseData.ageStyle[70][4].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
      {
        country: 'North European',
        zeroTo19: responseData.ageStyle[0][5].user_style__count,
        zeroTo19Color: 'hsl(265, 70%, 50%)',
        twenites: responseData.ageStyle[20][5].user_style__count,
        twenitesColor: 'hsl(287, 70%, 50%)',
        thirites: responseData.ageStyle[30][5].user_style__count,
        thiritesColor: 'hsl(135, 70%, 50%)',
        forties: responseData.ageStyle[40][5].user_style__count,
        fortiesColor: 'hsl(273, 70%, 50%)',
        fifties: responseData.ageStyle[50][5].user_style__count,
        fiftiesColor: 'hsl(257, 70%, 50%)',
        sixties: responseData.ageStyle[60][5].user_style__count,
        sixtiesColor: 'hsl(13, 70%, 50%)',
        seventies: responseData.ageStyle[70][4].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
      {
        country: 'Minimal',
        zeroTo19: responseData.ageStyle[0][6].user_style__count,
        zeroTo19Color: 'hsl(205, 70%, 50%)',
        twenites: responseData.ageStyle[20][6].user_style__count,
        twenitesColor: 'hsl(356, 70%, 50%)',
        thirites: responseData.ageStyle[30][6].user_style__count,
        thiritesColor: 'hsl(182, 70%, 50%)',
        forties: responseData.ageStyle[40][6].user_style__count,
        fortiesColor: 'hsl(15, 70%, 50%)',
        fifties: responseData.ageStyle[50][6].user_style__count,
        fiftiesColor: 'hsl(103, 70%, 50%)',
        sixties: responseData.ageStyle[60][6].user_style__count,
        sixtiesColor: 'hsl(183, 70%, 50%)',
        seventies: responseData.ageStyle[70][4].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
      {
        country: 'Vintage',
        zeroTo19: responseData.ageStyle[0][7].user_style__count,
        zeroTo19Color: 'hsl(205, 70%, 50%)',
        twenites: responseData.ageStyle[20][7].user_style__count,
        twenitesColor: 'hsl(356, 70%, 50%)',
        thirites: responseData.ageStyle[30][7].user_style__count,
        thiritesColor: 'hsl(182, 70%, 50%)',
        forties: responseData.ageStyle[40][7].user_style__count,
        fortiesColor: 'hsl(15, 70%, 50%)',
        fifties: responseData.ageStyle[50][7].user_style__count,
        fiftiesColor: 'hsl(103, 70%, 50%)',
        sixties: responseData.ageStyle[60][7].user_style__count,
        sixtiesColor: 'hsl(183, 70%, 50%)',
        seventies: responseData.ageStyle[70][7].user_style__count,
        seventiesColor: 'hsl(86, 70%, 50%)',
      },
    ];
  }

  React.useEffect(() => {
    getData();
  }, []);

  if (isloading) {
    return <p>loading...</p>;
  }
  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: '90%', height: '20rem', margin: '0 auto' }}>
      <ResponsiveBar
        data={data}
        keys={[
          'zeroTo19',
          'twenites',
          'thirites',
          'forties',
          'fifties',
          'sixties',
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fifties',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'thirites',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
          );
        }}
      />
    </div>
  );
};

export default DataChart;
