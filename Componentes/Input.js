import React, { useState } from "react";
import {Text, TextInput, Button, View} from 'react-native';
import Estilo from "./Estilo";

export default () => {
const [text, setText] = useState('');

const mudancaTexto = (text) => {
    setText(text);
};

const pressionado = () => {
    console.warn('Texto digitado:', (text));
};

return(
    <View style = {Estilo.container}>
        <TextInput
            placeholder="Digite algo aqui"
            onChangeText={mudancaTexto}
            value={text}
        />
        <Button
            title="Salvar"
            onPress={pressionado}
            color='black'
        />
    </View>
    
);
}