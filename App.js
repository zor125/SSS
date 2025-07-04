import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// TouchableOpacity 컴포넌트 임포트
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (
  //앱 시작
    <View style={styles.container}>
    
  //차량 사용 버튼
  <TouchableOpacity style= {styles.circleButton}>
    <Text style={styles.buttonText}>사용합니다</Text>
  </TouchableOpacity>


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
});


