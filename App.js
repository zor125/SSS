import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// TouchableOpacity 컴포넌트 임포트
import { TouchableOpacity } from 'react-native';
// 시작시간 종료시간 설정 컴포넌트 임포트
import { CircularSlider } from 'react-native-circular-slider';
import { useState } from 'react';


export default function App() {
  //시작시간 종료시간 기능 각도 상수 선언
  const [startAngle, setStartAngle] = useState(0);
  const [angleLength, setAngleLength] = useState(60);//60도 기본 설정
  //각도에 따른 시간 상수 선언
  const startHour = Math.floor(startAngle / 15); // 15도마다 한 시간, 시작시간
  const endHour = Math.floor((startAngle + angleLength) / 15); // 종료시간


  //리턴 시작
  return (
  //앱 시작
    <View style={styles.container}>
    
  //차량 사용 버튼
  <TouchableOpacity style= {styles.circleButton}>
    <Text style={styles.buttonText}>사용합니다</Text>
  </TouchableOpacity>

  //시작시간 종료시간 버튼
  <CircularSlider
    value={startAngle}
    onChange={setStartAngle}
    angleLength={angleLength}
    onAngleLengthChange={setAngleLength}
    strokewidth={10}//선분 두께
    buttonStrokeWidth={20}//버튼 선분 두께
    openingRadian={Math.PI / 4} //시작 각도
    buttonRadius={15} //버튼 반지름
    radius={70} //슬라이더 반지름
  />

  //시작시간 종료시간 텍스트
  <Text style={styles.timeText}>
    시작시간: {startHour}시 ~ 종료시간: {endHour}시
  </Text>

  //스테이터스 바
  <StatusBar style="auto" />
  </View>
  );
}




//styleSheet 시작
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  timeText: {
    fontSize: 18,
    marginTop: 20,
  }
});


