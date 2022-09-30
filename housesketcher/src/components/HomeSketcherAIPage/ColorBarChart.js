import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';

// 사용 라이브러리 : https://nivo.rocks/
// 참고 블로그 : https://jforj.tistory.com/269

const ColorAgeChart = ({ responseData }) => {
  // 3. 실시간 인기 스타일 차트 보여주기

  const data = [
    {
      country: 'Red',
      '0-19': responseData[0]['red'],
      '0-19Color': 'hsl(19, 70%, 50%)',
      '20-29': responseData[20]['red'],
      '20-29Color': 'hsl(286, 70%, 50%)',
      '30-39': responseData[30]['red'],
      '30-39Color': 'hsl(160, 70%, 50%)',
      '40-49': responseData[40]['red'],
      '40-49Color': 'hsl(273, 70%, 50%)',
      '50-59': responseData[50]['red'],
      '50-59Color': 'hsl(119, 70%, 50%)',
      '60-69': responseData[60]['red'],
      '60-69Color': 'hsl(86, 70%, 50%)',
      '70-79': responseData[70]['red'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['red'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Orange',
      '0-19': responseData[0]['orange'],
      '0-19Color': 'hsl(72, 70%, 50%)',
      '20-29': responseData[20]['orange'],
      '20-29Color': 'hsl(53, 70%, 50%)',
      '30-39': responseData[30]['orange'],
      '30-39Color': 'hsl(231, 70%, 50%)',
      '40-49': responseData[40]['orange'],
      '40-49Color': 'hsl(118, 70%, 50%)',
      '50-59': responseData[50]['orange'],
      '50-59Color': 'hsl(164, 70%, 50%)',
      '60-69': responseData[60]['orange'],
      '60-69Color': 'hsl(205, 70%, 50%)',
      '70-79': responseData[70]['orange'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['orange'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Yellow',
      '0-19': responseData[0]['yellow'],
      '0-19Color': 'hsl(101, 70%, 50%)',
      '20-29': responseData[20]['yellow'],
      '20-29Color': 'hsl(208, 70%, 50%)',
      '30-39': responseData[30]['yellow'],
      '30-39Color': 'hsl(237, 70%, 50%)',
      '40-49': responseData[40]['yellow'],
      '40-49Color': 'hsl(156, 70%, 50%)',
      '50-59': responseData[50]['yellow'],
      '50-59Color': 'hsl(332, 70%, 50%)',
      '60-69': responseData[60]['yellow'],
      '60-69Color': 'hsl(121, 70%, 50%)',
      '70-79': responseData[70]['yellow'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['yellow'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Green',
      '0-19': responseData[0]['green'],
      '0-19Color': 'hsl(340, 70%, 50%)',
      '20-29': responseData[20]['green'],
      '20-29Color': 'hsl(314, 70%, 50%)',
      '30-39': responseData[30]['green'],
      '30-39Color': 'hsl(31, 70%, 50%)',
      '40-49': responseData[40]['green'],
      '40-49Color': 'hsl(275, 70%, 50%)',
      '50-59': responseData[50]['green'],
      '50-59Color': 'hsl(19, 70%, 50%)',
      '60-69': responseData[60]['green'],
      '60-69Color': 'hsl(50, 70%, 50%)',
      '70-79': responseData[70]['green'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['green'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Blue',
      '0-19': responseData[0]['blue'],
      '0-19Color': 'hsl(56, 70%, 50%)',
      '20-29': responseData[20]['blue'],
      '20-29Color': 'hsl(357, 70%, 50%)',
      '30-39': responseData[30]['blue'],
      '30-39Color': 'hsl(253, 70%, 50%)',
      '40-49': responseData[40]['blue'],
      '40-49Color': 'hsl(46, 70%, 50%)',
      '50-59': responseData[50]['blue'],
      '50-59Color': 'hsl(93, 70%, 50%)',
      '60-69': responseData[60]['blue'],
      '60-69Color': 'hsl(27, 70%, 50%)',
      '70-79': responseData[70]['blue'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['blue'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Indigo',
      '0-19': responseData[0]['indigo'],
      '0-19Color': 'hsl(265, 70%, 50%)',
      '20-29': responseData[20]['indigo'],
      '20-29Color': 'hsl(287, 70%, 50%)',
      '30-39': responseData[30]['indigo'],
      '30-39Color': 'hsl(135, 70%, 50%)',
      '40-49': responseData[40]['indigo'],
      '40-49Color': 'hsl(273, 70%, 50%)',
      '50-59': responseData[50]['indigo'],
      '50-59Color': 'hsl(257, 70%, 50%)',
      '60-69': responseData[60]['indigo'],
      '60-69Color': 'hsl(13, 70%, 50%)',
      '70-79': responseData[70]['indigo'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['indigo'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Purple',
      '0-19': responseData[0]['purple'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['purple'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['purple'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['purple'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['purple'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['purple'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['purple'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['purple'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Brown',
      '0-19': responseData[0]['brown'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['brown'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['brown'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['brown'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['brown'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['brown'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['brown'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['brown'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Pink',
      '0-19': responseData[0]['pink'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['pink'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['pink'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['pink'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['pink'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['pink'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['pink'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['pink'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'White',
      '0-19': responseData[0]['white'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['white'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['white'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['white'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['white'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['white'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['white'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['white'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Black',
      '0-19': responseData[0]['black'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['black'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['black'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['black'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['black'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['black'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['black'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['black'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Gray',
      '0-19': responseData[0]['gray'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['gray'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['gray'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['gray'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['gray'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['gray'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['gray'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['gray'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
  ];

  React.useEffect(() => {}, []);

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: '80%', height: '20rem', margin: '0 auto' }}>
      <ResponsiveBar
        data={data}
        keys={['0-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'older']}
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
          legend: 'Color',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
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
            translateX: 100,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 10,
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
          return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
        }}
      />
    </div>
  );
};

export default ColorAgeChart;
