import react from "react";
import {Text,View} from 'react-native';
import Estilo from "./Estilo";

export default ({min,max}) => {
    const d = max - min + 1;
    const aleatorio = (Math.random()*d) + min;
    return (
        <Text style = {Estilo.textGrande}> Número: {parseInt(aleatorio)} </Text>
    )
}