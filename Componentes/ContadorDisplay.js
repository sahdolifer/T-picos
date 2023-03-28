import React, {useState} from "react";
import { Button, Text, View } from "react-native";
import Estilo from "./Estilo";

export default props => {

    return(
        <View>
            <Text style = {Estilo.textGrande}> {props.numero} </Text>
        </View>
    )
}

//props. quando eu estou RECEBENDO O VALOR DE UMA VARÁVEL