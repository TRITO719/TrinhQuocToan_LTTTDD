import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [soA,setSoA]= useState('');
  const [soB,setSoB]= useState('');
  const [kq,setKq]= useState('');

  const tinhTong=() =>{
    const a= parseFloat(soA);
    const b= parseFloat(soB);
    if(!isNaN(a) && !isNaN(b)){
      const tong=a+b;
      setKq(tong);
    }else {
      setKq("Hay nhap dung")
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nhập số A:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text=> setSoA(text)}
        value={soA}
      />
      <Text>Nhập số B:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text=> setSoB(text)}
        value={soB}
      />
      <Button title='Sum' onPress={tinhTong}/>
      <Text>{kq}</Text>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
