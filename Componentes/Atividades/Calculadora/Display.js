import React from "react";
import { TextInput } from "react-native";

<TextInput
style={{borderBottomWidth: 1}}
placeholder='0'
value={this.state.qtdNumeros}
onChangeText={
    qtde => this.alterarQtdNumeros(qtde)}
/>