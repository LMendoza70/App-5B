import {View, Text, TextInput, Button} from 'react-native'
import { estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native'

export const Login=()=>{
  const nav=useNavigation()
    return(
      <View style={estilos.container}>
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
        <Button title='Login' onPress={()=>nav.navigate('Home')}/>
        <Button title='Cancel'/>
      </View>
    )
  }