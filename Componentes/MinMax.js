import react from "react";
import {Text, View} from 'react-native';
import Estilo from './Estilo';

export default ({min,max}) => {
    //console.warn(props.min)
    return(
        <Text style = {Estilo.textGrande}> 
        O valor {max} é maior que o valor {min}! </Text>
    )
}