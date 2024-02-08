import { View } from 'react-native'
import React from 'react'
import { Boton, Caja } from './Atomicos'
import { estilos } from './Estilos'

export const Calculadora = () => {
  return (
    <View>
        <View>
            <Caja valor={'5.5'}/>
        </View>
        <View style={estilos.botonera}>
            <Boton Texto={' % '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={'CE'} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' C '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={'<-'} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={'1/x'} ColorA={'#b49b85'} ColorB={'#eac195'} />
            <Boton Texto={' x²'} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={'sqr'} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' / '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 7 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 8 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 9 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' * '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 4 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 5 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 6 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' - '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 1 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 2 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 3 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' + '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={'+/-'} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' 0 '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' . '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
            <Boton Texto={' = '} ColorA={'#b49b85'} ColorB={'#eac195'}/>
        </View>
    </View>
  )
}
