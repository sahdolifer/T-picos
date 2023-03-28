import React from "react";
import { View } from "react-native";
import Estilo from "./Estilo";

export default (props) => {
    return(
        
        <>
        <View style = {Estilo.card}>
            {props.children}
        </View>
        </>
    )
}