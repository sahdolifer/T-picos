import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import MeuComponente, { MeuComponente2, MeuComponente3 } from './Componentes/PrimeiroComponente';
import Estilo from './Componentes/Estilo';
import MinMax from './Componentes/MinMax';
import Aleatorio from './Componentes/Aleatorio';
import Frag from './Componentes/Frag';
import Button from './Componentes/Button';
import Contador from './Componentes/Contador';
import Input from './Componentes/Input';
import Pai from './Componentes/Pai';
import ParImpar from './Componentes/ParImpar'
import Card from './Componentes/Card';
import Familia from './Componentes/Familia';
import Membro from './Componentes/Membro';
import If from './Componentes/UsuarioLogado';
import Usuario from './Componentes/Usuario';
import ListaProduto from './Componentes/ListaProduto';
import Controlados from './Componentes/Controlados';
import Quadrado from './Componentes/Quadrado';
import FLexbox from './Componentes/FLexbox';
import Mega from './Componentes/Mega';
import Button2 from './Componentes/Button2';
import TelaA from './Componentes/TelaA';
import TelaB from './Componentes/TelaB';
import TelaC from './Componentes/TelaC';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Componentes/MyStack';
import Tab from './Componentes/Tab';
import Drawer from './Componentes/Drawer';

export default function App() {
  //console.warn("Opa")
  /*cliquei = () => {
    console.warn("Ok")
}*/

/*removeLastValue = () => {
  setValues(values.slice(0, -1))
}*/
  return (
      <SafeAreaView style={Estilo.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
      <Drawer> </Drawer>
      </NavigationContainer>

      {/*
            <NavigationContainer>
      <Tab></Tab>
      </NavigationContainer>

            <NavigationContainer>
        <MyStack> </MyStack>
      </NavigationContainer>
    <TelaA> </TelaA>
    <TelaB> </TelaB>
    <TelaC> </TelaC>
  
      <Display value={values}> </Display>
      
       </View> 
       
       <Botao label="AC" onClick=(clearDisplay) operacao> </Botao>
       <Botao label="/"> </Botao>
       <Botao label="%"> </Botao>
       <Botao label="<" onClick={removeLastValue} operacao> </Botao>
       <Botao label="+" onClick={addDigito}> </Botao>
       <Botao label="9" onClick={addDigito}> </Botao>
       <Botao label="8" onClick={addDigito}> </Botao>
       <Botao label="7" onClick={addDigito}> </Botao>
       <Botao label="6" onClick={addDigito}> </Botao>
       <Botao label="5" onClick={addDigito}> </Botao>
       <Botao label="4" onClick={addDigito}> </Botao>
       <Botao label="3" onClick={addDigito}> </Botao>
       <Botao label="2" onClick={addDigito}> </Botao>
       <Botao label="1" onClick={addDigito}> </Botao>
      <Botao label="0" onClick={addDigito}> </Botao>


      </View>*/}

      {/*<Button2 label={'ok'} onClick={cliquei}> </Button2>*/}

      {/*  <Mega qtdNUmeros={5}></Mega>
      <FLexbox></FLexbox>
      <Controlados></Controlados> 
      <ListaProduto>  </ListaProduto> 
      <SafeAreaView style={Estilo.container}>
          <Usuario usuario = {{nome: 'Lucas', email: 'lucas@unesp.br'}}> </Usuario>
          <Usuario usuario = {{email: 'rui@unesp.br'}}> </Usuario>
          <Usuario usuario = {{}}></Usuario
      </SafeAreaView> 
      <Card>
        <Familia>
          <Membro nome="Maria" sobrenome="Santos" />
          <Membro nome="Luan" sobrenome="Santos" />
          <Membro nome="Sarah" sobrenome="Santos" />
          <Text> Oii </Text>
        </Familia>
      </Card>
      <Card>
        <Familia>
          <Membro nome="Maria" sobrenome="Santos" />
          <Membro nome="Luan" sobrenome="Santos" />
        </Familia>
      </Card>
    
    <ParImpar num={11}></ParImpar>
    <Contador inicial={10}></Contador>  
    <Pai></Pai>
     <Input></Input>
     <Contador inicial={8} passo={1}></Contador>
      <Text style={styles.text}> Hello world </Text>
      <Frag></Frag> 
      <Button></Button>
      <Aleatorio min={1} max={100}></Aleatorio>
      <Aleatorio min={1} max={100}></Aleatorio>
      <Aleatorio min={1} max={100}></Aleatorio>
      <Aleatorio min={1} max={100}></Aleatorio>
      <Aleatorio min={1} max={100}></Aleatorio>
  <Aleatorio min={1} max={100}></Aleatorio>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C475F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
