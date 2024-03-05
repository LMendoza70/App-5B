import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from './Login'
import Home from "./Home";
import Clima from './Clima'
import Productos from "./Productos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Producto from "./Producto";
import {Calculadora} from './Calculadora'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Imc from "./Imc";
import {FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'

const StackH=createNativeStackNavigator()
const TabsH=createBottomTabNavigator()
const StackP=createNativeStackNavigator()
const Drawer=createDrawerNavigator()

//navegacion principal (de login a home)
export const StackHome=()=>{
    return(
        <StackH.Navigator>
            <StackH.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <StackH.Screen name="Home" component={MiDrawer} options={{headerShown:false}}/>
        </StackH.Navigator>
    )
}

//navegacion secundaria (tabs del home)
export const TabsHome=()=>{
    return(
        <TabsH.Navigator>
            <TabsH.Screen name="Home2" component={Home} 
            options={{headerShown:false,
            tabBarIcon:()=>(
                <FontAwesome name="home" size={30} color={'#000'}/>
            )}}/>
            <TabsH.Screen name="Clima" component={Clima}
            options={{
                tabBarIcon:()=>(
                    <MaterialCommunityIcons name="weather-lightning-rainy" size={30} color={'#000'}/>
                )
            }}/>
            <TabsH.Screen name="Productos" component={StackProductos}
            options={{
                tabBarIcon:()=>(
                    <FontAwesome name="tags" size={30} color={'#000'}/>
                )
            }}/> 
        </TabsH.Navigator>
    )
}

//navegacion de productos a producto detalle
export const StackProductos=()=>{
    return(
        <StackP.Navigator>
            <StackP.Screen name="Productos2" component={Productos} options={{headerShown:false}}/>
            <StackP.Screen name="Producto" component={Producto}/>
        </StackP.Navigator>
    )
}

export const MiDrawer=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home3" component={TabsHome} options={{headerShown:false}}/>
            <Drawer.Screen name="Imc" component={Imc}/>
            <Drawer.Screen name="Calculadora" component={Calculadora}/>
        </Drawer.Navigator>
    )
}