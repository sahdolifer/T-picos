import React from "react";
import { Text, TouchableHighlight, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Estilo from "./Estilo";

export default props => {
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.botao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create ({
    botao:
    {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#D223FA',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        color: '#fff'
    }
})

//PAI - função chamada no evento - console.warn