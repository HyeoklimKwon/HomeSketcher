import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';

// 사용 라이브러리 : https://nivo.rocks/
// 참고 블로그 : https://jforj.tistory.com/269

const StyleBarChart = ({ responseData }) => {
  // 3. 실시간 인기 스타일 차트 보여주기

  const data = [
    {
      country: 'Modern',
      '0-19': responseData[0]['Modern'],
      '0-19Color': 'hsl(19, 70%, 50%)',
      '20-29': responseData[20]['Modern'],
      '20-29Color': 'hsl(286, 70%, 50%)',
      '30-39': responseData[30]['Modern'],
      '30-39Color': 'hsl(160, 70%, 50%)',
      '40-49': responseData[40]['Modern'],
      '40-49Color': 'hsl(273, 70%, 50%)',
      '50-59': responseData[50]['Modern'],
      '50-59Color': 'hsl(119, 70%, 50%)',
      '60-69': responseData[60]['Modern'],
      '60-69Color': 'hsl(86, 70%, 50%)',
      '70-79': responseData[70]['Modern'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['Modern'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Natural',
      '0-19': responseData[0]['Natural'],
      '0-19Color': 'hsl(72, 70%, 50%)',
      '20-29': responseData[20]['Natural'],
      '20-29Color': 'hsl(53, 70%, 50%)',
      '30-39': responseData[30]['Natural'],
      '30-39Color': 'hsl(231, 70%, 50%)',
      '40-49': responseData[40]['Natural'],
      '40-49Color': 'hsl(118, 70%, 50%)',
      '50-59': responseData[50]['Natural'],
      '50-59Color': 'hsl(164, 70%, 50%)',
      '60-69': responseData[60]['Natural'],
      '60-69Color': 'hsl(205, 70%, 50%)',
      '70-79': responseData[70]['Natural'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['Natural'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Minimal',
      '0-19': responseData[0]['Minimal'],
      '0-19Color': 'hsl(101, 70%, 50%)',
      '20-29': responseData[20]['Minimal'],
      '20-29Color': 'hsl(208, 70%, 50%)',
      '30-39': responseData[30]['Minimal'],
      '30-39Color': 'hsl(237, 70%, 50%)',
      '40-49': responseData[40]['Minimal'],
      '40-49Color': 'hsl(156, 70%, 50%)',
      '50-59': responseData[50]['Minimal'],
      '50-59Color': 'hsl(332, 70%, 50%)',
      '60-69': responseData[60]['Minimal'],
      '60-69Color': 'hsl(121, 70%, 50%)',
      '70-79': responseData[70]['Minimal'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['Minimal'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'North European',
      '0-19': responseData[0]['North European'],
      '0-19Color': 'hsl(340, 70%, 50%)',
      '20-29': responseData[20]['North European'],
      '20-29Color': 'hsl(314, 70%, 50%)',
      '30-39': responseData[30]['North European'],
      '30-39Color': 'hsl(31, 70%, 50%)',
      '40-49': responseData[40]['North European'],
      '40-49Color': 'hsl(275, 70%, 50%)',
      '50-59': responseData[50]['North European'],
      '50-59Color': 'hsl(19, 70%, 50%)',
      '60-69': responseData[60]['North European'],
      '60-69Color': 'hsl(50, 70%, 50%)',
      '70-79': responseData[70]['North European'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['North European'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Vintage',
      '0-19': responseData[0]['Vintage'],
      '0-19Color': 'hsl(56, 70%, 50%)',
      '20-29': responseData[20]['Vintage'],
      '20-29Color': 'hsl(357, 70%, 50%)',
      '30-39': responseData[30]['Vintage'],
      '30-39Color': 'hsl(253, 70%, 50%)',
      '40-49': responseData[40]['Vintage'],
      '40-49Color': 'hsl(46, 70%, 50%)',
      '50-59': responseData[50]['Vintage'],
      '50-59Color': 'hsl(93, 70%, 50%)',
      '60-69': responseData[60]['Vintage'],
      '60-69Color': 'hsl(27, 70%, 50%)',
      '70-79': responseData[70]['Vintage'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['Vintage'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Antique',
      '0-19': responseData[0]['Antique'],
      '0-19Color': 'hsl(265, 70%, 50%)',
      '20-29': responseData[20]['Antique'],
      '20-29Color': 'hsl(287, 70%, 50%)',
      '30-39': responseData[30]['Antique'],
      '30-39Color': 'hsl(135, 70%, 50%)',
      '40-49': responseData[40]['Antique'],
      '40-49Color': 'hsl(273, 70%, 50%)',
      '50-59': responseData[50]['Antique'],
      '50-59Color': 'hsl(257, 70%, 50%)',
      '60-69': responseData[60]['Antique'],
      '60-69Color': 'hsl(13, 70%, 50%)',
      '70-79': responseData[70]['Antique'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['Antique'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Provence',
      '0-19': responseData[0]['Provence'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['Provence'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['Provence'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['Provence'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['Provence'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['Provence'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['Provence'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['Provence'],
      olderColor: 'hsl(86, 70%, 50%)',
    },
    {
      country: 'Mediterranean',
      '0-19': responseData[0]['Mediterranean'],
      '0-19Color': 'hsl(205, 70%, 50%)',
      '20-29': responseData[20]['Mediterranean'],
      '20-29Color': 'hsl(356, 70%, 50%)',
      '30-39': responseData[30]['Mediterranean'],
      '30-39Color': 'hsl(182, 70%, 50%)',
      '40-49': responseData[40]['Mediterranean'],
      '40-49Color': 'hsl(15, 70%, 50%)',
      '50-59': responseData[50]['Mediterranean'],
      '50-59Color': 'hsl(103, 70%, 50%)',
      '60-69': responseData[60]['Mediterranean'],
      '60-69Color': 'hsl(183, 70%, 50%)',
      '70-79': responseData[70]['Mediterranean'],
      '70-79Color': 'hsl(86, 70%, 50%)',
      older: responseData['old']['Mediterranean'],
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
          legend: 'Style',
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

export default StyleBarChart;
