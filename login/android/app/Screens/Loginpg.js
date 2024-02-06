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
import Eye from "../assets/icons/Eye";
import TruffleLogo from "../assets/logo/TruffleLogo";
//import useAuth from '../BackFunc/AuthFunc';

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


{/* 수정됨 */}
const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
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
        style={styles.save}> 
        {/* 로그인 정보 유지하는 함수 */}
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
    if (budget=="") {
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
  })
  
  export default Loginpg;
