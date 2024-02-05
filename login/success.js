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
