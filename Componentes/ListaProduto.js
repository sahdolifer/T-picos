import React from "react";
import { Text } from "react-native";
import Estilo from "./Estilo";
import produtos from "./Produto";

export default props => {
    function carregaLista(){
        return produtos.map(p => {
            return <Text key={p.id}> {p.id} - {p.nome} - Preço R$ {p.preco} </Text>
        })
    }

    return( //Outra forma de exibir os itens
    <>
        <Text style={Estilo.textGrande}> Lista de Produtos </Text>
        {carregaLista()}
        {produtos.map(p => {
            return <Text key={p.id}> {p.id} - {p.nome} - Preço R$ {p.preco} </Text>
        })}
    </>
)}