import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    return(
        <View style = {style.FlexV1}>
            <Quadrado cor='#9100FA'></Quadrado>
            <Quadrado cor='#B200FA'></Quadrado>
            <Quadrado cor='#C305F8'></Quadrado>
            <Quadrado cor='#C25BFA'></Quadrado>
            <Quadrado cor='#D083FA'></Quadrado>
        </View>
    )
}

const style = StyleSheet.create(
    {
        FlexV1: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            height: 350,
            width: '100%',

        },
    }
);