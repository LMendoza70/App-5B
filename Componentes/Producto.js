import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const Producto = ({route}) => {
    const {id}=route.params
    const [prod,setProd]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/'+id)
      .then((res)=>res.json())
      .then((obj)=>{
        setProd(obj)
        setLoad(true)
      })
      .catch((err)=>Alert.alert('Ocuerrio un error : '+err))
    },[])

    const screenL=()=>{
      return(
    <View>
      <Text>Titulo {prod.title}</Text>
      <Text>Precio {prod.price}</Text>
      <Image source={{uri:prod.image}}  style={{height:150,width:150}}/>
      <Text>Descripcion {prod.description}</Text>
      <Text>Puntuacion {prod.rating.rate}</Text>
    </View>
      )
    }

    const screenU=()=>{
      return(
      <View>
        <ActivityIndicator/>
        <Text>Cargando Datos...</Text>
      </View>)
      
    }


  return (
    <View>
      {load?screenL():screenU()}
    </View>
  )
}

export default Producto