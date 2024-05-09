import { StyleSheet, Text, View } from 'react-native'
import { Colores } from './App'
import React from 'react'



const Segunda = () => {
  return (
    <View style={styles.container}>
      <Text>segunda</Text>
    </View>
  )
}

export default Segunda

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})