import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#FB9EDD',
        //'#FB9EDD',
        flex: 1, //componente pode ocupar 100% da tela
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    textGrande:{
        fontSize: 25,
        textAlign: 'center'
    },
    botao:{
        color:"black",
    },
    card:{
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
    }
})

//Justify cintent - controla as posições no eixo principal (vertical)
//Align itens - controla a posição dos elementos ao longo do eixo secundário do contâiner