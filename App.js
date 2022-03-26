import  React, {useState}from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Button } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const[valor1,setValor1] = React.useState('0');
  const[valor2,setValor2] = useState('0');
  const[resultado,setResultado] =  useState('');
  const[number1,setnumber1] = React.useState('1');
  const soma = ()=>{
    setResultado(parseInt(valor1)+parseInt(valor2))

  }
  
  return (
    <View style={styles.container}>
    <Text style={{textAlign:'center', fontSize:'25px', color:'#B2DECD'}}> Calculadora de Soma</Text>
      <TextInput
      style={styles.display}
      value={String(valor1)}
      onChangeText= {(texto)=>{setValor1(texto)}}
      keyboardType='numeric'
      />
        <TextInput
      style={styles.display}
      value={String(valor2)}
      onChangeText= {(texto)=>{setValor2(texto)}}
      keyboardType='numeric'
      />
     
     <TouchableHighlight
       style={styles.btn} 
       onPress={()=>soma()}
      >
      
      <Text style={styles.txtbtn}>CALCULAR</Text>
      
      </TouchableHighlight>
      <TextInput
      style={styles.display}
      value={String(resultado)}
      onChangeText= {(texto)=>{setResultado(texto)}}
      keyboardType='numeric'
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  display:{
    borderWidth:1,
    borderRadius:2,
    padding:10,
    marginTop:30,
    backgroundColor:'#FFFFE0',
  
  },
btn:{
      marginTop:20,
      backgroundColor: '#ADD',
      padding: 10,
      borderRadius:300,
   },
   txtbtn:{
     color:'white',
     alignSelf: 'center',
     fontWeight: 'bold',
     
   }

});
