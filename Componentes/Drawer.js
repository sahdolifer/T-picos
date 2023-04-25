import { createDrawerNavigator } from "@react-navigation/drawer";
import {Text,View, Button} from 'react-native';
import React from "react";
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";

const Drawer = createDrawerNavigator();

/*export default (props) => (
<Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="TelaA" component={TelaA}/>
    <Drawer.Screen name="TelaB" component={TelaB}/>
    <Drawer.Screen name="TelaC" component={TelaC}/>
</Drawer.Navigator>
);*/

export default (props) => {
    return(
    <>   
        <Drawer.Navigator initialRouteName="TelaA">
        <Drawer.Screen name="TelaA" component={TelaA}/>
        <Drawer.Screen name="TelaB" component={TelaB}/>
        <Drawer.Screen name="TelaC" component={TelaC}/>
    </Drawer.Navigator>
    </>
)}