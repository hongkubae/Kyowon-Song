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

import AsyncStorage from '@react-native-async-storage/async-storage';

import { onSubmit } from './authFunctions';
import { authService } from './firebaseConfig';


function Loginpg({ navigation }) {
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [validation, setValidation] = useState("");

const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleEmailChange = (val) => {
    setEmail(val);
  };


{/* 로그인 정보 저장 async storage */}
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Load stored email and password when the component mounts
    loadLoginInfo();
  }, []);

  const loadLoginInfo = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('storedEmail');
      const storedPassword = await AsyncStorage.getItem('storedPassword');

      if (storedEmail && storedPassword) {
        setEmail(storedEmail);
        setPassword(storedPassword);
        setRememberMe(true);
      }
    } catch (error) {
      console.error('Error loading login information:', error);
    }
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };



{/* const getLogInfo = async () => {
  const email = await AsyncStorage.getItem('email');
  const password = await AsyncStorage.getItem('password');
}
const saveLogInfo = async () => {
  await AsyncStorage.setItem('email', JSON.stringify(email));
  await AsyncStorage.setItem('password', JSON.stringify(password));
} */}


{/* 수정됨 */}
const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (rememberMe) {
        {/* 로그인 정보 저장 */}
        await AsyncStorage.setItem('storedEmail', email);
        await AsyncStorage.setItem('storedPassword', password);
      }
      {/* 로그인 */}
        await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setValidation('일치하는 이메일 혹은 비밀번호가 없습니다.', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truffle</Text>
      <TextInput
        style={styles.input}
        val={email}
        onChangeText={handleEmailChange}
        placeholder="이메일"
        keyboardType="email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="비밀번호"
        keyboardType="email"
      />

        {/* 비밀번호나 이메일 안맞았을떄-- 버튼누르고 체크후 띄울수 있게 어떻게하지 */}
        <Text style={{bottom: 20, fontSize: 12,
    color: '#ff0000', }}>{validation}</Text>

      <TouchableOpacity
        style={styles.save} 
        onPress={toggleRememberMe} >
        
        <Text style={styles.saveTxt}>로그인 정보 저장</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.saveTxt}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.reset}
        onPress={() => navigation.ForgotPW()}>
        <Text style={styles.saveTxt}>비밀번호 재설정</Text>
      </TouchableOpacity>
    </View>
  );
}

function Budgetpg() {
  const [budget, onChangeBudget] = React.useState('');

{/* updateUser()들 Budget page랑 ForgotPW랑 각각 다름 */}
  const updateUser = async (userId, updatedData) => {
    if (budget!=="") {
      const userDoc = doc(db, 'users', userId);
  await updateDoc(userDoc, updatedData);
    }
};


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
        onChangeText={onChangeBudget}
        updatedData={budget}
        placeholder="300,000원"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateUser}>
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}


function SignupPg() {

  const { useState } = React;

{/* catch 오류문구 */}
const [validation, setValidation] = useState("");


{/* try-catch로 수정했는데 맞는지 불확실: 이미 존재하는 이메일인지 체크해야함-- 아님 login()이랑 합쳐야할듯? */}
const addUser = async (userData) => {
try{
  const usersCollection = collection(db, 'users');
  await addDoc(usersCollection, userData);
} catch (error) {
  setValidation('이미 존재하는 이메일입니다.');
}

};



  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordContent, setPasswordContent] = useState('');
  const [passwordContent1, setPasswordContent1] = useState('');
  const [email, setEmail] = useState('');
  const [emailContent, setEmailContent] = useState('');

const validateEmail = email => {
  {/* 이메일 조건설정 */}
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}
  const handleEmailChange = (val) => {
    setEmail(val);

    if (val && !validateEmail(val)) {
      setEmailContent('허용되지 않는 이메일 형식입니다.');
    } 
    else {
      setEmailContent('');
    }
  };

{/* 비밀번호 조건설정 */}
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
        placeholder="이메일"
        keyboardType="email"
        val={email}
          onChangeText={handleEmailChange}
      />

<Text style={styles.errTxt}>{validation}</Text>
    <Text style={{top: 232,
    fontSize: 12,
    color: '#ff0000', position: 'absolute'}}>{emailContent}</Text>
      <TextInput
        style={styles.inputS}
        setPassword={setPassword}
        placeholder="비밀번호"
        keyboardType="email"
        secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
      />
      <Text style={styles.errTxt}>{passwordContent1}</Text>
      <TextInput
        style={styles.inputS}
        placeholder="비밀번호 확인"
        keyboardType="email"
        secureTextEntry={true}
          value={password2}
          onChangeText={handlePassword2Change}
      />
      
      <Text style={styles.errTxt}>{passwordContent}</Text>

      <TouchableOpacity
        style={styles.buttonS}
        onPress={addUser}
        >
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
      height: 40,
      width: 232,
      marginBottom: 30,
      color: '#878787',
      borderBottomWidth:0.5
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
    errTxt: {
    top: 100,
    fontSize: 12,
    color: '#ff0000',
  },
  })
  
  export default Loginpg;
