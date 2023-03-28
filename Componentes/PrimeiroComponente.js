import React from "react";
import {Text,View} from 'react-native';
import Estilo from "./Estilo";

export default function MeuComponente(){
    return(//{Estilo.textGrande} para explicitar que é JavaScript - variável
        <Text style = {Estilo.textGrande}> Esse é o meu primeiro aplicativo </Text>
    );
}

export function MeuComponente2(){
    return(
    <Text style = {Estilo.textGrande}> Esse é o meu segundo aplicativo </Text>
);
}

export const MeuComponente3 = () => ( //novo modo de criar um componente
    <Text style = {Estilo.textGrande}> Componente 3 </Text>
)

//export default - se eu tenho 2 ou mais componentes em um arquivo, sempre que eu exportar
//para um outro arquivo sem especificar, vai importar o default. Nesse caso, temos que
//colocar entre {} na hora do import. Se colocar algum fora de {}, vai ser o default.
//Pode receber qualquer nome.