import react from "react";
import {Text,View} from 'react-native';
import Estilo from "./Estilo";

export default () => {
    return(
        <> 
            <Text style = {Estilo.textGrande}> Elemento 1! </Text>
            <Text style = {Estilo.textGrande}> Elemento 2! </Text>
        </>
    )
}

// Frag - permite renderizar múltiplos elementos
//<></>Abreviação de <React.Fragment></React.Fragment>