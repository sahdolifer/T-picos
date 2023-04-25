import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 

const Tab = createBottomTabNavigator()

export default (props) => (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;

                if (route.name == 'TelaA') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name == 'TelaB') {
                    iconName = focused ? 'heart' : 'heart-outline';
                } else if (route.name == 'TelaC') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}

        tabBarOption={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
        }}>

        <Tab.Screen name="TelaA" component={TelaA}/>
        <Tab.Screen name="TelaB" component={TelaB}/>
        <Tab.Screen name="TelaC" component={TelaC}/>
        </Tab.Navigator>



    /*
        <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: {fontSize: 10}
    }}

    initialRouteName="Tela B">
        <Tab.Screen name="Tela A" component={TelaA}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                ),
                tabBarLabel: 'Home',
                title: 'Home'
            }} 
        />
        <Tab.Screen name="Tela B" component={TelaB}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" color={color} size={size}/>
                ),
                title: 'Settings'
            }} 
        />
        <Tab.Screen name="Tela C" component={TelaC} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information-circle" color={color} size={size}/>
                ),
                title: 'Informations'
            }} 
        />
    </Tab.Navigator>*/
);