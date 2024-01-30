import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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
        <Login/>
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
      <Boton Texto={'Login'} Logo={require('./assets/react.png')} Color={'red'}/>
      <Boton Texto={'Cancel'} Logo={require('./assets/favicon.png')} Color={'blue'}/>
    </View>
  )
}

export const Boton=({Texto,Logo,Color})=>{
  return(
    <Pressable style={[styles.boton, {backgroundColor:Color}]} >
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
    backgroundColor:'#72b6c9',
    padding:5,
    margin:3,
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
