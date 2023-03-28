import React from "react";
import { Text } from "react-native";
import Estilo from "./Estilo";
import If from "./UsuarioLogado";

export default props => {
    const usuario = props.usuario || {}
    return(
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.textGrande}> Usuário Logado: </Text>
                <Text style={Estilo.textGrande}> 
                    {usuario.nome} - {usuario.email}
                </Text>

            </If>
        </>
    )
}

