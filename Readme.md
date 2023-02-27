# react native 활용 navigation 및 calendar 구현

### library

react-navigation/bottom-tabs<br/>
react-navigation/native<br/>
react-navigation/native-stack<br/>
react-native-safe-area-context<br/>
@expo/vector-icons<br/>
react-native-gesture-handler<br/>
react-native-reanimated

### 기능 구현 리스트

1.  하단에 Bottom Tabs Navigator를 추가하고 4개(홈 / 캘린더 / 라이브러리 / 마이페이지)의 탭을 추가 후 연결
2.  라이브러리를 이용하지 않고 캘린더 컴포넌트 제작
    1.  캘린더에 현재 월 출력 후 오늘 날짜 표시
    2.  상단 좌우 화살표 버튼 클릭 시 전월, 익월 캘린더 출력
    3.  특정 날짜를 선택하면 해당 날짜를 원으로 표시 (마지막 선택 날짜만)
