import { View, Text, Alert, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './Estilos'

const Clima = () => {
    const [data,setData]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110&q=huejutla&days=3&aqi=no&alerts=no&lang=es')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
        .catch(err=>Alert.alert('Error inesperado : '+err))
    },[])

    const UScreen=()=>{
        return(
            <View>
                <ActivityIndicator size={'large'} color={'darkblue'}/>
                <Text>Cargando datos</Text>
            </View>
        )
    }

    const LScreen=()=>{
        return(
            <View>
                <Text>{data.location.name}</Text>
                <Text>{data.current.temp_c}°</Text>
                <Text>{data.current.condition.text}  max 
                {data.forecast.forecastday[0].day.maxtemp_c}° / 
                min {data.forecast.forecastday[0].day.mintemp_c}°</Text>
                <FlatList
                data={data.forecast.forecastday}
                renderItem={({item})=><Card 
                condicion={item.day.condition.text}
                max={item.day.maxtemp_c}
                min={item.day.mintemp_c}
                iko={item.day.condition.icon}/>}
                />
            </View>
        )
    }

    const Card=({condicion,max,min,iko})=>{
        return(
            <View>
                <Text>{condicion}</Text>
                <Text>{max}°C</Text>
                <Text>{min}°C</Text>
                <Image style={{height:30,width:30}} source={{uri:'https:'+iko}}/>
            </View>
        )
    }

  return (
    <View style={estilos.ContainerClima}>
      <Text>Clima</Text>
      {load?LScreen():UScreen()}
    </View>
  )
}

export default Clima