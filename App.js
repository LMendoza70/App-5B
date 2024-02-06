import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Estado } from './Componentes/Estado';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Nombre</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export function Cuerpo(){
  return(
    <View style={styles.contenido}>
        <Text style={styles.texto}>Proyecto de 5B</Text>
        <Estado/>
    </View>
  )
}

export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export const Pie2=(props)=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{props.op1}</Text>
        <Text style={styles.texto}>{props.op2}</Text>
        <Text style={styles.texto}>{props.op3}</Text>
        <Text style={styles.texto}>{props.op4}</Text>
    </View>
  )
}

export const Pie3=({opA,opB,opC,opD})=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{opA}</Text>
        <Text style={styles.texto}>{opB}</Text>
        <Text style={styles.texto}>{opC}</Text>
        <Text style={styles.texto}>{opD}</Text>
    </View>
  )
}
export const Login=()=>{
  return(
    <View>
      <Text>Login...</Text>
      <TextInput placeholder='Hola soy un placeholder'
      autoCapitalize='words'
      enterKeyHint='search'
      inputMode='numeric'
      />
      <Text>Password...</Text>
      <TextInput value='Hola no soy un placeholder' 
      keyboardType='numeric'
      secureTextEntry={true}
      />
      <Button title='Login'/>
      <Button title='Cancel'/>
      
      <Boton 
      Texto={'Login'} 
      Logo={require('./assets/react.png')} 
      ColorA={'#cc55aa'}
      ColorB={'#aa22ff'}
      accion={()=>Alert.alert('Soy el boton rosita')}/>
      
      <Boton 
      Texto={'Cancel'} 
      Logo={require('./assets/favicon.png')} 
      ColorA={'#aacc55'}
      ColorB={'#88aa22'}
      accion={()=>Alert.alert('Yo soy verde')}/>

      <Boton
      accion={()=>Alert.alert('Yo soy el tercer boton')}
      Texto={'Tercer Boton'}
      ColorA={'red'}
      ColorB={'blue'}
      Logo={require('./assets/icon.png')}/>
    </View>
  )
}


export const Boton=({Texto,Logo,ColorA,ColorB,accion})=>{
  return(
    <Pressable 
    style={({pressed})=>[{
      backgroundColor:pressed?ColorA:ColorB,
      margin:pressed?9:3
    },styles.boton]} 
    onPress={accion}
    >
      <Image style={styles.imagenB} source={Logo} />
      <Text style={styles.textoB}>{Texto}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  imagenB:{
    height:33,
    width:30,
    marginEnd:10
  },
  container: {
    flex: 10,
    backgroundColor: '#753c15',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'stretch'
  },
  encabezado:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#c09a7e',
    
  },
  pie:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#c09a7e',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  contenido:{
    flex:8,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    color:"#fff",
    fontSize:30
  },
  textoB:{
    color:'white',
    fontSize:18
  },
  boton:{
    flexDirection:'row',
    padding:5,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#c09a7e',
    borderWidth:1,
    borderRadius:5
  }
});
/*
<Pressable
onPress={() => {
  setTimesPressed(current => current + 1);
}}
style={({pressed}) => [
  {
    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
  },
  styles.wrapperCustom,
]}>
{({pressed}) => (
  <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
)}
</Pressable>
*/
