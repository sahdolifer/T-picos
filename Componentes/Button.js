import react from "react";
import {Text,View, Button} from 'react-native';
import Estilo from "./Estilo";

export default props => {
    function executar(){
        console.warn('Exec 1!') //onPress quando clica no botão a função onPress é ativada
    }
    return(
        /*<>
            <Button style = {Estilo.botao}
                title = "CLique em mim!"
                onPress = {() => {
                    console.warn('O botão foi pressionado!');
                }}/>
        </>*/

        <>
            <Button
                title = "Executar #1!"
                onPress={executar}

                color="black"
                accessibilityLabel = "Clique aqui para realizar" //acessibilidade
                testID="meu-botao-teste"
            />

        </>
    )
}

//OnPress é a função que o botão vai chamar
//O Fragment usamos quando vamos retornar mais de um botão