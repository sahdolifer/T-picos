import React from "react";
import { Text } from "react-native";
import Estilo from "./Estilo";
import Membro from "./Membro";

export default (props) => {
return(
    <>
        <Text style = {Estilo.textGrande}> Membros família: </Text>
        {props.children}
    </>
)
}
