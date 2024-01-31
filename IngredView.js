{/* 재료박스 스크롤 하려는데 ScrollView 오류, 재료들 row로 해서 justifyContent center 하려는데 안됨, 재료랑 양이랑 margin 띄우면서 재료는 재료끼리 양은 양끼리 열맞추고 싶은데 잘안됨 */}

import React, {useState} from 'react';
import {
  NavigationContainer,
  Text,
  Button,
  View,
  TouchableOpacity,
  TextInput, ScrollView, 
  StyleSheet, Alert, Modal, Image
} from 'react-native';


const Title = props => {
const {food} = props

  return (
    <Text style={{color: '#000', marginHorizontal: 5,
        textDecorationLine: 'underline', textDecorationColor: '#FEA655', fontSize: 20,
        }}>{props.food}</Text>

  );
};

{/* 음식재료 */}
const Ingred = props => {
const {food, ingred, num, unit, isThere} = props

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', 
    marginVertical: 5,
    marginHorizontal: 20,}}>
    <Text style={{color: '#000', marginHorizontal: 5,
        fontSize: 13, fontWeight: 'bold'}}>
        {props.ingred}</Text> 

        <Text style={{ color: '#000', marginHorizontal: 5,
        fontSize: 13,}}>
        {props.num} {props.unit}</Text>

        <Text style={{color: '#979797', marginHorizontal: 5,
        fontSize: 12,}}>
        {props.measure}</Text>

    </View>
  );
};

const Time = props => {
const {food, time} = props

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', 
    marginVertical: 5,
    marginHorizontal: 20,}}>
        <Text style={{color: '#000', marginHorizontal: 5,
        fontSize: 18,}}>
        {props.time} 분</Text>

    </View>
  );
};

function IngredView() {
  const [text, onChangeText] = React.useState('');

const [min, setMin] = useState('');

  let handleMinChange = (event) => {
    let value = event.target.value;
    setMin(value);
  };

  const [modalVisible, setModalVisible] = useState(false);
  
  

  return (
    <View style={styles.container}>

      <Image source={{ uri: "https://via.placeholder.com/118x66"}}
        style={{top: 83,
    marginBottom: 20, 
    paddingTop: 4, borderRadius: 7, position: 'absolute', backgroundColor: '#EDEDED', width: 350, height: 139,}}/>


{/*<ScrollView style={{top: 100, height: 'auto'}}> */}

{/*텍스트박스 어떻게 한쪽으로만 늘어나게하지 */}
      <View
        style={{
          top: 240, right: 130, marginLeft: 10,
        backgroundColor: '#FFFFFF',
        
        borderRadius: 10,
        paddingLeft: 6, paddingRight: 6, paddingTop: 7, paddingBottom: 7, 
        marginBottom: 17, 
          }}
> 
<Title food="닭볶음탕"/>
      </View>
<View
        style={{ right: 62, top: 240,
        backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    width: 215,
    height: 330,
    borderRadius: 10, }}>
        <Ingred ingred="아스파라거스" num="100" unit="ml"/>
        <Ingred ingred="표고버섯" num="2" unit="개" measure="70g"/>
      </View>
<View
        style={{ left: 115, bottom: 91,
        backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 112,
    height: 150,
    borderRadius: 10,
    marginBottom: 15, }}>
      <View style={{flexDirection: 'row', 
    justifyContent: 'center', top: 78,
          color: '#000',}}>
        <Time time="130"/>
    {/* 소요시간 */}
      </View>
      </View>

      <View
        style={{ left: 115, bottom: 91,
        backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 112,
    height: 166,
    borderRadius: 10, }}
        onPress={() => navigation.navigate('Recipe')}>
        <Text style={{
          top: 5,
          color: '#000000', 
        fontSize: 18, 
        textAlign: 'center',
        }}>
        난이도</Text>
      </View>

<View style={styles.row}>
      <TouchableOpacity
        style={{ top: 85,
        
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 10,
    width: 140,
    borderRadius: 25,
    marginBottom: 20, }}
        onPress={() => navigation.back()}>
 
        <Text style={{
          color: '#CCCCCC', 
        fontSize: 15, 
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'NanumGothic' 
        }}>
        뒤로가기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>조리하기</Text>
      </TouchableOpacity>
  </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F8F9FA', // 배경색상 추가
  },

  row: {
    position: 'absolute',
    top: 570,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    gap: 25,
  },

    button: {
    top: 85,
    width: 140,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,

  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
  },

});


export default IngredView;
