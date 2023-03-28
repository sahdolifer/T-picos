import React, { useState } from "react";
import Filho from "./Filho";
import { Text } from "react-native";
import Estilo from "./Estilo";

export default pai => {
    const [num,setNum] = useState(0)
    const [texto,setTexto] = useState('')
    function exibirValor(numero,texto){
        console.warn(numero)
        setNum(numero)
        setTexto(texto)
    }

    return(
        <>
            <Filho
                min={1}
                max={10}
                funcao = {exibirValor}
            />
            <Text style = {Estilo.textGrande}> {texto}:{num} </Text>
        </>
    )
}


// Comunicação indireta - quando um componente FIlho passa informações para o componente pai
    //callback