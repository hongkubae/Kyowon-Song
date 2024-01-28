import React from 'react';
import {
  NavigationContainer,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Img } from './assets/eye.png';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

/*
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log">
      <Stack.Sceen name="Login" component={Loginpg} />
      <Stack.Sceen name="Budget" component={Budgetpg} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App; */


function Loginpg({ navigation }) {
const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truffle</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="이메일"
        keyboardType="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="비밀번호"
        keyboardType="email"
      />
      <TouchableOpacity
        style={styles.save}
        onPress={() => navigation.navigate('Visible')}></TouchableOpacity>

      <TouchableOpacity
        style={styles.save}
        onPress={() => navigation.navigate('Save')}>
        <Text style={styles.saveTxt}>로그인 정보 저장</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.saveTxt}>회원가입></Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.reset}
        onPress={() => navigation.navigate('Reset')}>
        <Text style={styles.saveTxt}>비밀번호 재설정></Text>
      </TouchableOpacity>
    </View>
  );
}

function Budgetpg() {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Back')}>
        <Text style={styles.backBTN}> ⟨ </Text>
      </TouchableOpacity>

      <Text style={styles.introBudget}>이번 달 식비 예산을 설정해주세요.</Text>
      <Text style={styles.subTitle}>
        매달 1회 변경 가능하니 신중하게 해주세요 !
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="300,000원"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}


function SignupPg() {
  const [text, onChangeText] = React.useState('');
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Back')}>
        <Text style={styles.backBTN}> ⟨ </Text>
      </TouchableOpacity>

      <Text style={styles.topTitle}>회원가입</Text>
      
      <TextInput
        style={styles.inputS}
        onChangeText={onChangeText}
        value={text}
        placeholder="이메일"
        keyboardType="email"
      />
      <TextInput
        style={styles.inputS}
        onChangeText={onChangeText}
        value={text}
        placeholder="비밀번호"
        keyboardType="email"
      />
      <TextInput
        style={styles.inputS}
        onChangeText={onChangeText}
        value={text}
        placeholder="비밀번호 확인"
        keyboardType="email"
      />

      <TouchableOpacity
        style={styles.buttonS}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.log}
        onPress={() => navigation.navigate('Reset')}>
        <Text style={styles.saveTxt}>이미 계정이 있나요?  로그인하기</Text>
      </TouchableOpacity>
    </View>
  );
}

function SuccessLogin () {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Truffle</Text>
      <Text style={styles.center}>축하드립니다 !{"\n"}회원가입이 완료되었습니다.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      
    </View>
  );
}

function SuccessPW () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truffle</Text>
      <Text style={styles.center}>비밀번호 변경이 완료되었습니다.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      
    </View>
  );
}


function ForgotPW() {
  const [text, onChangeText] = React.useState('');

  const [number, onChangeNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordContent, setPasswordContent] = useState('');
  const [passwordContent1, setPasswordContent1] = useState('');
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Back')}>
        <Text style={styles.backBTN}> ⟨ </Text>
      </TouchableOpacity>

      <Text style={styles.topTitle}>비밀번호 재설정</Text>
      
      <TextInput
        style={styles.inputP}
        onChangeText={onChangeText}
        value={text}
        placeholder="이메일"
        keyboardType="email"
      />
      <TouchableOpacity
        style={styles.midButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>인증번호 발송</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resend}
        onPress={() => navigation.navigate('Reset')}>
        <Text style={styles.saveTxt}>인증번호 재발송</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.inputRe}
        onChangeText={onChangeText}
        value={text}
        placeholder="인증번호"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.inputP}
        onChangeText={onChangeText}
        value={text}
        placeholder="비밀번호"
        keyboardType="email"
      />
      <TextInput
        style={styles.inputP}
        onChangeText={onChangeText}
        value={text}
        placeholder="비밀번호 확인"
        keyboardType="email"
      />

      <TouchableOpacity
        style={styles.buttonP}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>비밀번호 변경</Text>
      </TouchableOpacity>
      
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F9FA', // 배경색상 추가
  },
  title: {
    fontSize: 40,
    top: 47,
    marginBottom: 211,
    fontFamily: 'NanumGothic',
    color: '#000', // 글자색상 추가
  },

  input: {
    fontSize: 15,
    borderWidth: 0.5,
    height: 28,
    width: 232,
    marginBottom: 30,
    color: '#878787',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth:0,
  },
  save: {
    bottom: 15,
    right: 45,
  },
  saveTxt: {
    fontSize: 12,
    color: '#757575',
  },
  signUp: {
    top: 105,
    right: 100,
    paddingHorizontal: 100,
  },
  reset: {
    top: 90,
    left: 100,
    paddingHorizontal: 100,
  },

  button: {
    top: 85,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
  },

  //budgetpg
  introBudget: {
    fontSize: 20,
    top: 149,
    marginBottom: 211,
    fontFamily: 'NanumGothic',
    color: '#000', // 글자색상 추가
  },
  subTitle: {
    color: '#727272',
    bottom: 45,
  },
    back: {
    top: 42,
    right: 163,
  },
  backBTN: {
    fontSize: 25,
  },

  //signuppg
  topTitle: {
    fontSize: 24,
    top: 12,
  },
  log: {
    top: 193,

  },
  inputS: {
    fontSize: 15,
    borderWidth: 0.5,
    height: 28,
    width: 232,
    top: 120,
    marginBottom: 40,
    color: '#878787',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth:0,
  },
  buttonS: {
    top: 193,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 25,
    marginBottom: 20,
  },
  
  //success
  center: {
    fontSize: 20,
    top: 20,
    marginBottom: 55,
    textAlign: 'center',
  },

  //forgotPW
  inputP: {
    fontSize: 15,
    borderWidth: 0.5,
    height: 28,
    width: 232,
    top: 80,
    marginBottom: 40,
    color: '#878787',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth:0,
  },
  buttonP: {
    top: 93,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 25,
  },
  midButton: {
    right: 48,
    top: 64,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 23,
    borderRadius: 25,
  },
  resend: {
    top: 33,
    left: 75,
  },
  inputRe: {
    fontSize: 15,
    borderWidth: 0.5,
    height: 28,
    width: 160,
    top: 82,
    right: 35,
    marginBottom: 10,
    color: '#878787',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth:0,
  },
  smallButton: {
    left: 85,
    top: 36,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
  },
});


export default ForgotPW;
