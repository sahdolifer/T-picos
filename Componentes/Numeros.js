import React from "react";
import {Text, View, StyleSheet} from 'react-native'
import Estilo from "./Estilo";

export default props => {
    return (
        <View style = {Estilo.numero_container}>
            <Text style={(Estilo.textGrande, Estilo.num)}>
                {props.num}
            </Text>
        </View>
    )
}