import { View, Text, ActivityIndicator, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './Estilos'

const Productos = () => {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
    },[])

    const LScreen=()=>{
        return(
            <View>
                <FlatList
                data={data}
                renderItem={({item})=><Card
                title={item.title}
                price={item.price}
                image={item.image}
                />}
                keyExtractor={item=>item.id}
                />
            </View>
        )
    }

    const UScreen=()=>{
        return(
            <View>
                <ActivityIndicator color={'beige'} size={'large'}/>
                <Text>Cargando datos...</Text>
            </View>
        )
    }

    const Card=({title,price,image})=>{
        return(
            <View style={estilos.card}>
                <Image style={{height:70,width:70}}
                source={{uri:image}}/>
                <View style={{flexDirection:'column'}}>
                    <Text>Producto {title}</Text>
                    <Text>Precio ${price}MXN</Text>
                </View>
            </View>
        )
    }

  return (
    <View>
      <Text>Productos</Text>
      {load?LScreen():UScreen()}
    </View>
  )
}

export default Productos