import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native'
import React from 'react'



const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={require('./assets/react.png')}/>
      <Text style={styles.Titulo}>Machtia</Text>
      <TextInput style={styles.cajas} placeholder='User'/>
      <TextInput 
      style={styles.cajas} 
      placeholder='Password'
      secureTextEntry={true}/>
      <Button title='Login' onClick={saludar()}/>
    </View>
  )
}

/*function saludar(){
  Alert.alert("Hola")
}*/

const saludar=()=>{
  Alert.alert('Saludo desde la flecha')
  console.log('okok')
}

export const Colores = {
  primario: '#69543E', // Café oscuro
  secundario: '#A78B63', // Café medio
  terciario: '#E6D8B9', // Café claro
  acento: '#F3E4CD', // Beige claro
  texto: '#423936', // Negro
  fondo: '#FDF5E6', // Crema
};


export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    paddingHorizontal:20,
    justifyContent:'space-evenly',
    alignItems:'stretch',
    backgroundColor:Colores.fondo
  },
  Titulo:{
    alignSelf:'center',
    fontSize:30,
    color:Colores.texto,
  },
  foto:{
    height:50,
    width:50,
    alignSelf:'center'
  },
  cajas:{
    borderWidth:2,
    borderColor:Colores.primario,
    borderRadius:10,
    fontSize:20,
    padding:15
  }
})