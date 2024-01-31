import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet, 
} from 'react-native';

import Eye from './components/AssetExample';


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

        {/* 비밀번호나 이메일 안맞았을떄-- 버튼누르고 체크후 띄울수 있게 어떻게하지 */}
<Text style={{bottom: 20, fontSize: 12,
    color: '#ff0000', }}>일치하는 이메일 혹은 비밀번호가 없습니다</Text>
      <TouchableOpacity
        style={styles.save}> 
        <Text style={styles.saveTxt}>로그인 정보 저장</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Budgetpg')}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.saveTxt}>회원가입></Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.reset}
        onPress={() => navigation.ForgotPW()}>
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
  const { useState } = React;

  const [text, onChangeText] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordContent, setPasswordContent] = useState('');
  const [passwordContent1, setPasswordContent1] = useState('');

  const reg = /^(?=.*[a-zA-Z])(?=.*[\W_])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const pwCondition = (password) => {
    return reg.test(password);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);

    if (value && !pwCondition(value)) {
      setPasswordContent1('8-15자 이내의 영문, 숫자, 특수문자를 조합해주세요.');
    } else {
      setPasswordContent1('');
    }
  };

  const handlePassword2Change = (value) => {
    setPassword2(value);

    if (password !== value) {
      setPasswordContent('비밀번호가 일치하지 않습니다');
    } else {
      setPasswordContent('');
    }
  };

  const isPassword = (value1, value2) => {
    return value1 === value2;
  };

  const handleFormSubmit = () => {
    if (!isPassword(password, password2)) {
      alert('모든 항목을 제대로 입력해주십시오');
    }
  };


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
        setPassword={setPassword}
        value={password}
        placeholder="비밀번호"
        keyboardType="email"
        secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
      />
      <TextInput
        style={styles.inputS}
        placeholder="비밀번호 확인"
        keyboardType="email"
        secureTextEntry={true}
          value={password2}
          onChangeText={handlePassword2Change}
      />
      <Text style={{    top: 26,
    fontSize: 12,
    color: '#ff0000',}}>{passwordContent1}</Text>
      <Text style={{top: 80,
    fontSize: 12,
    color: '#ff0000',}}>{passwordContent}</Text>

      <TouchableOpacity
        style={styles.buttonS}
        onPress={() => navigation.SignupPg()}>
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



{/*비밀번호 재설정 */}
function ForgotPW() {

{/*const [imageSrc, setImageSrc] = useState("https://via.placeholder.com/118x66"); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
const [isClicked, setIsClicked] = useState(false);

const handleClick = () => {
  if (isClicked) {
    setImageSrc("https://via.placeholder.com/118x66");
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc("https://via.placeholder.com/118x66");
      setIsClicked(true); // true일 땐 변경될 이미지 src
    }
}; */}


  {/* 타이머 */}
    const initialTime = 540;
    const [remainingTime, setRemainingTime] = useState(initialTime);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isStartButtonDisabled, setIsStartButtonDisabled] = useState(false);
    const [isStopButtonDisabled, setIsStopButtonDisabled] = useState(true);
    const [isResendButtonDisabled, setIsResendButtonDisabled] = useState(true);

    useEffect(() => {
        let timer;

        if (isTimerRunning && remainingTime > 0) {
            timer = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(timer);

    }, [isTimerRunning, remainingTime]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleStartTimer = () => {
        setIsTimerRunning(true);
        setIsStartButtonDisabled(true);
        setIsStopButtonDisabled(false);
        setIsResendButtonDisabled(false);
    };

    const handleStopTimer = () => {
        setIsTimerRunning(false);
        setIsStopButtonDisabled(true);
        setIsResendButtonDisabled(true);
        
    };

    const handleResetTimer = () => {
        setRemainingTime(initialTime);
        setIsTimerRunning(true);
        setIsStartButtonDisabled(true);
        setIsStopButtonDisabled(false);
        
    };

  {/*조건문 useState */}

  const [text, onChangeText] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordContent, setPasswordContent] = useState('');
  const [passwordContent1, setPasswordContent1] = useState('');

  const reg = /^(?=.*[a-zA-Z])(?=.*[\W_])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const pwCondition = (password) => {
    return reg.test(password);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);

    if (value && !pwCondition(value)) {
      setPasswordContent1('8-15자 이내의 영문, 숫자, 특수문자를 조합해주세요.');
    } else {
      setPasswordContent1('');
    }
  };

  const handlePassword2Change = (value) => {
    setPassword2(value);

    if (password !== value) {
      setPasswordContent('비밀번호가 일치하지 않습니다');
    } else {
      setPasswordContent('');
    }
  };

  const isPassword = (value1, value2) => {
    return value1 === value2;
  };

  const handleFormSubmit = () => {
    if (!isPassword(password, password2)) {
      alert('모든 항목을 제대로 입력해주십시오');
    }
  };


  return(

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}>
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
        style={[styles.midButton, {backgroundColor: isStartButtonDisabled ? '#CCCCCC' : '#FEA655'} ]}
        onPress={handleStartTimer} 
                disabled={isStartButtonDisabled}> 
        <Text style={styles.buttonText}>인증번호 발송</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resend}
        onPress={handleResetTimer}
        disabled={isResendButtonDisabled} >
        <Text style={styles.saveTxt}>인증번호 재발송</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.inputRe}   
    placeholder="인증번호"
        keyboardType="numeric"
      />
    

{/* 타이머 */}
<Text style={{ color: 'purple', position: 'absolute', top: 275, paddingLeft: 30}}>{formatTime(remainingTime)}</Text>


      <TouchableOpacity
        style={[styles.smallButton, {backgroundColor: isStopButtonDisabled ? '#CCCCCC' : '#FEA655'} ]}
        onPress={handleStopTimer} 
                disabled={isStopButtonDisabled} 
                
        >
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
<TouchableOpacity style={{top: 98}}>
    <Eye/>
   </TouchableOpacity>   
      <TextInput
        style={styles.inputP}
        setPassword={setPassword}
        value={password}
        placeholder="비밀번호"
        keyboardType="email"
        secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
      />
      <Text style={styles.passwordContent}>{passwordContent1}</Text>
      <TouchableOpacity style={{top: 98}}>
    {/*<Image src={imageSrc} onClick={handleClick}/>*/}
    <Eye/>
   </TouchableOpacity>   
      <TextInput
        style={styles.inputP}
        placeholder="비밀번호 확인"
        keyboardType="email"
        secureTextEntry={true}
          value={password2}
          onChangeText={handlePassword2Change}
      />
      <Text style={styles.passwordContent}>{passwordContent}</Text>

      <TouchableOpacity
        style={styles.buttonP}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText} type="submit">비밀번호 변경</Text>
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
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
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
    top: 130,
    marginBottom: 40,
    color: '#878787',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth:0,
  },
  buttonS: {
    top: 183,
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
  passwordContent: {
    top: 50,
    fontSize: 12,
    color: '#ff0000',
  },
});


export default ForgotPW;
