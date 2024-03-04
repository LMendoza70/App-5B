import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from './Login'
import Home from "./Home";
import Clima from './Clima'
import Productos from "./Productos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Producto from "./Producto";

const StackH=createNativeStackNavigator()
const TabsH=createBottomTabNavigator()
const StackP=createNativeStackNavigator()

//navegacion principal (de login a home)
export const StackHome=()=>{
    return(
        <StackH.Navigator>
            <StackH.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <StackH.Screen name="Home" component={TabsHome} options={{headerShown:false}}/>
        </StackH.Navigator>
    )
}

//navegacion secundaria (tabs del home)
export const TabsHome=()=>{
    return(
        <TabsH.Navigator>
            <TabsH.Screen name="Home2" component={Home} options={{headerShown:false}}/>
            <TabsH.Screen name="Clima" component={Clima}/>
            <TabsH.Screen name="Productos" component={StackProductos}/> 
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
