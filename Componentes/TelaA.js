import React, {useEffect} from "react";
import {Text} from 'react-native'
import TextoCentral from "./TextoCentral";
import { useNavigation } from "@react-navigation/native";
import PassoStack from "./PassoStack";

export default props => {
    console.warn(props.navigation.navigate != null)
    //props.navigation.navigate("TelaC")
    return (
        <PassoStack {...props} avancar='TelaB'>
            <TextoCentral corFundo='black'>
                Tela A
            </TextoCentral>
        </PassoStack>
    )
}