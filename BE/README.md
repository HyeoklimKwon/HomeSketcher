- 기획 2단계

  [서비스 설명](https://www.notion.so/420aa739efdd4c36a1f16fd521a8a985)

  [서비스 주요 기능](https://www.notion.so/420aa739efdd4c36a1f16fd521a8a985)

  [데이터 현황](https://www.notion.so/420aa739efdd4c36a1f16fd521a8a985)

  [추천방안](https://www.notion.so/420aa739efdd4c36a1f16fd521a8a985)

  [추가고려사항](https://www.notion.so/420aa739efdd4c36a1f16fd521a8a985)

  ------

  <aside> <img src="https://w7.pngwing.com/pngs/633/11/png-transparent-exclamatory-point-illustration-exclamation-mark-yellow-cartoon-cute-cartoon-yellow-exclamation-mark-cartoon-character-rectangle-cartoons.png" alt="https://w7.pngwing.com/pngs/633/11/png-transparent-exclamatory-point-illustration-exclamation-mark-yellow-cartoon-cute-cartoon-yellow-exclamation-mark-cartoon-character-rectangle-cartoons.png" width="40px" /> 서비스 설명

  ### 주제

  가구 추천 및 배치 서비스

  ------

  ### 서비스 상세

  사용자의 예산, 취향, 방 크기 정보를 통해 원룸 및 오피스텔 인테리어 가구 추천 서비스

  ------

  ### 타켓층:

  - 사회초년생 (20~30대) 오피스텔 (붙박이장 및 냉장고 제외)
  - 원룸을 임대시켜야 하는 건물 소유주

  ------

  ### 주요기능 (요약)

  1. 유저 취향 파악
     1. 이미지선택을 통한 취향 파악
     2. 글자로 설문지
     3. 선택지
     4. 1안 + 3안 → 확인 까지

  2-1. 세입자를 위한 서비스

  1. 사용자가 평수와 이에 해당하는 평면도를 선택하면 해당 3D모델 생성
     1. 사용자에게 수집한 취향 정보를 바탕으로 가구 추천
     2. 사용자가 선택한 가구를 평면도(2D or 3D)에 배치
     3. 배치된 가구들에 대한 total 가격 계산
  2. 선택한 가구 정보 리스트 제공 및 구입 홈페이지로 이동 기능

  2-2. 건물주를 위한 서비스 (lx 하우시스 데이터 등 자재 데이터 있는 경우 매력적)

  1. 사용자에게 수집한 정보를 바탕으로 벽지, 바닥재 등의 색상 및 디자인 추천
  2. 사용자가 평수와 이에 해당하는 평면도를 선택하면 해당 모델 생성
     1. 모델에서 벽지, 바닥재 추천
        1. 해당 물품의 색상 및 디자인 변경 옵션
  3. 선택한 물품 정보 리스트 제공 및 구입 홈페이지로 이동 기능
  4. 커뮤니티
     1. 자신의 인테리어 사진 공유를 위한 커뮤니티
  5. 단일 가구 추천

  

   🔎 주요 기능

  1. 유저의 취향을 파악하기 위한 form
     - 1안 : 이미지선택을 통한 취향 파악
       - 이미지별 태그 등록으로 해당 이미지의 스타일 정해줌
       - 스타일 ,컬러
     - 3안 : 2안 진행 중간 1안 추가 방식

  2-1 가구추천 및 배치 (세입자)

  - 세입자를 위한가구 추천 서비스

  - 사용자가 평수, 배치, 예산 입력

  - 해당 모델 생성 후 추천하는 가구들이 보임

  - 장바구니 및 모델 선택 시 가구 구매 링크로 이동 가능

  - 조감도

    장바구니

  2-2 인테리어 추천 (건물주)

  - 벽지, 바닥재, 색상등 추천
  - 3d 모델에서 해당 부분 색상 및 디자인 변경
  - 조감도

  1. 커뮤니티

  - 자신의 인테리어 사진 공유

  - 조감도

    단일 가구 추천

   <img src="https://w7.pngwing.com/pngs/760/390/png-transparent-data-collection-computer-icons-information-big-data-data-collection-angle-text-computer-program.png" alt="https://w7.pngwing.com/pngs/760/390/png-transparent-data-collection-computer-icons-information-big-data-data-collection-angle-text-computer-program.png" width="40px" /> 데이터 현황

  - [floorplanner](https://floorplanner.readme.io/reference/getting-started) (2d, 3d 이미지 랜더링 api)
  - [walmart](https://walmart.io/docs/affiliate/introduction)  (walmart api - 제품 정보 및 리뷰 등)
  - [이케아](https://pypi.org/project/ikea-api/)  (상품 정보 및 리뷰)
  - [11번가](https://openapi.11st.co.kr/openapi/OpenApiGuide.tmall) (상품 정보 및 구매 만족도 등)
  - [Urbanvase](https://openapi.sk.com/API/detail?svcSeq=20) (AI 기반 실내공간 정보 분석 서비스)
  - [디자인 이미지 정보](https://www.kaggle.com/datasets/aishahsofea/interior-design)
  - [알리바바](https://tianchi.aliyun.com/dataset/dataDetail?spm=5176.14208604.0.0.a3c33cf7la72pa&dataId=98063) (가구 obj 약 30GB / 20,240개의 사실적인 실내 이미지와 관련 16,563개의 고유한 3D 가구 모델)

  ------

  ### 데이터 요청 현황

  - 오늘의집
    - 인스타 DM
    - 이메일 → 연락 기다리는 중
  - 일룸
    - 이메일 → 연락 대기 중
  - lx 하우시스
    - 고객센터 연락
    - 인스타 DM → 연락없음..
  - 한샘 ( 실패 )
    - 전화 연락 → 담당자 연결 대기중 → 거절
    - 인스타 DM
    - Facebook DM
  - 현대 L&C (바닥제 등) (가구는 안팜) (실패)
    - 이메일
    - 담당자 연락 → 실패 ㅠ
  - 현대 리바트 ( 실패 )
    - 인스타 DM → 회사 방침에 의해 데이터 외부 반출 불가 </aside>

  <aside> <img src="https://cdn-icons-png.flaticon.com/512/411/411724.png" alt="https://cdn-icons-png.flaticon.com/512/411/411724.png" width="40px" /> 추천 방안 (예시)

  1. 유럽풍 등 스타일 - ( 컨텐츠 필터링 방식 )
     1. 사용자 취향 분석을 위한 이미지셋에 스타일 태그 추가 필요 예상
     2. 각 가구별로 스타일 태그 추가 필요 예상
        1. 다른 방법이 있을지 생각 필요
  2. 유사 사용자의 구매 내역으로 추천 - ( 협업 필터링 )
     1. Memory based Approach
        1. User item 추천 KNN 예시일뿐
     2. Model based Approach
        1. 모델을 만든다 (머신러닝)  Matrix Fatorization
  3. 예산 정보를 바탕으로 가격대별 추천 </aside>

  <aside> <img src="data:image/jpeg;base64,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" alt="data:image/jpeg;base64,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" width="40px" /> 추가 고려사항

  - 3d를 위한 Obj 데이터 확보 방안?
  - 데이터 전처리 작업 방향성?
  - Cold start 해결 방안?
  - 금요일 발표 분량?

  </aside>

  ------

  참고할만한 정보들

  - (아키스케치) https://planner.archisketch.com/?projectId=YLpUNNG8407A1EA69AC45F7
  - (three js로 인테리어 페이지 만들기) https://www.youtube.com/watch?v=WNKfL0_qLOw
  - (디자인 이미지) https://www.kaggle.com/datasets/aishahsofea/interior-design

  https://free3d.com/ko/3d-models/obj-가구

  https://archive3d.net/