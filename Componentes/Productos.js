import { View, Text, ActivityIndicator, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native'

const Productos = () => {
    const nav=useNavigation()
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
                id={item.id}
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

    const Card=({title,price,image,id})=>{
        return(
            <Pressable style={estilos.card} 
            onPress={()=>nav.navigate('Producto',{id:id})}>
                <Image style={{height:70,width:70}}
                source={{uri:image}}/>
                <View style={{flexDirection:'column'}}>
                    <Text>Producto {title}</Text>
                    <Text>Precio ${price}MXN</Text>
                </View>
            </Pressable>
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