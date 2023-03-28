import React from "react";
import { Text, View } from "react-native";
import Estilo from "./Estilo";

export default Condicional2 = (props) => {
    const texto = props.num% 2 ===0 ? "Par!" : "Impar!";

    return(
        <View>
            <Text style = {Estilo.textGrande}> O resultado é: </Text>
            <Text style = {Estilo.textGrande}> {texto} </Text>
        </View>
    )
}