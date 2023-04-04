import React from "react";
import { Text, TextInput, Button, View } from "react-native";
import Estilo from "./Estilo";
import MegaNumero from "./Numeros"

export default class Mega extends React.Component{

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    gerarNumeros = () => {
        const N = this.state.qtdNumeros
        const numeros = []

        for(let i=0; i<N; i++)
        {
            numeros.push(this.gerarNumeroNaoContido(numeros))
        }
        numeros.sort((a,b) => a-b)
        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(n => {
            return <MegaNumero key ={n} num={n}/>
        })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }


    alterarQtdNumeros(qtde)
    {
        this.setState({qtdNumeros: qtde})
    }
    render(){
        return (
            <>
            <Text style={Estilo.textGrande}> 
                Gerador de Mega - sena {this.props.qtdNumeros} 
            </Text>
            <TextInput
                keyboardType={'numeric'}
                style={{borderBottomWidth: 1}}
                placeholder='Qtde de Números'
                value={this.state.qtdNumeros}
                onChangeText={
                    qtde => this.alterarQtdNumeros(qtde)}
            />

            <Button
                title = "Gerar Números"
                onPress={this.gerarNumeros}

                color="black"
                accessibilityLabel = "Clique aqui para realizar" //acessibilidade
                testID="meu-botao-teste"
            />
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', marginTop: 20, backgroundColor: '#FA8FE'}}>
                {this.exibirNumeros()} 
            </View>

            {/*<Text style={Estilo.num}> {this.state.numeros.join(',')} </Text>*/}

            </>
        )

    }

}

//MAP permite a visualização dinâmica