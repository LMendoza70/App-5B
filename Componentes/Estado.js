import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export const Estado=()=>{
    const [contador,setcontador]=useState(0)

    return(
        <View style={estilos.contenedor}>
            <Text style={estilos.texto}>Hola soy el componente</Text>
            <Button title="ok" onPress={()=>setcontador(contador+1)}/>
            <Text style={estilos.texto}>Contaador : {contador} </Text>
        </View>
    )
}


const estilos= StyleSheet.create({
    contenedor:{
        alignItems:'center',
        justifyContent:'center'
    },
    texto:{
        color:'#fff',
        fontSize:25
    }
})