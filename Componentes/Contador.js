import react, { useState } from "react";
import {Text, Button} from 'react-native';
import Estilo from "./Estilo";
import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";


/* O número na tela não atualiza - só no warning
export default props => {
    let numero = props.inicial

    const inc = () => {
        numero++
        console.warn(numero)
    }

    const dec = () => numero--

    return (
        <>
            <Text style = {Estilo.textGrande}> {numero} </Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}*/

/*export default props =>{
    const [numero,setNumero] = useState(props.inicial)
    const inc = () => setNumero(numero+props.passo)
    const dec = () => setNumero(numero-props.passo)

    return(
        <>
            <Text style = {Estilo.textGrande}> {numero} </Text>
            <Button title="+" onPress={inc} color="black"/>
            <Button title="-" onPress={dec} color="black"/>
        </>
    )
}*/

export default props =>{
    const [numero,setNumero] = useState(props.inicial)
    const inc = () => setNumero(numero+1)
    const dec = () => setNumero(numero-1)
    return(
        <>
            <ContadorDisplay numero={numero}></ContadorDisplay>
            <ContadorBotoes inc={inc} dec={dec}></ContadorBotoes>
        </>
    )
}

//useState - adiciona estado a um componente de função
/*<ContadorBotoes INC={inc} DEC={dec}></ContadorBotoes> -> INC e DEC (que vem antes do =) precisa ser o mesmo nome que foi declarado
no componente ao qual estou enviando os parâmetros*/