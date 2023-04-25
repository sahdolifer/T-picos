import React, {useEffect, useState} from "react";
import {Text, Button} from 'react-native'
import TextoCentral from "./TextoCentral";
import { useNavigation } from "@react-navigation/native";
import PassoStack from "./PassoStack";
import { createDrawerNavigator, openDrawer } from "@react-navigation/drawer";

export default props => {
    console.warn(props.navigation.navigate != null)
    //props.navigation.navigate("TelaC")

    if(props.route.params?.numero == null)
    {
        return (
            <PassoStack {...props} avancar='TelaA'>
                <TextoCentral corFundo='black'>
                    Tela A
                    <Button
                    title = "Abrir"
                    onPress={props.navigation.openDrawer()}
                    color="blue"/> 
                </TextoCentral>
            </PassoStack>
        )
    }
    else
    {
        return (
            <>
            <PassoStack {...props} avancar='TelaA'>
                <TextoCentral corFundo='black'>
                    Tela A - {props.route.params?.numero}
                </TextoCentral>
            </PassoStack>

</>
        )
    }
}