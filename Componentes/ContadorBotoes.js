import react, { useState } from "react";
import {Text, Button} from 'react-native';
import Estilo from "./Estilo";

export default props =>{

    return(
        <>
            <Button title="+" onPress={props.inc} color="black"/>
            <Button title="-" onPress={props.dec} color="black"/>
        </>
    )
}