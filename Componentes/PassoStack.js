import React from "react";
import {View, Text, Button} from 'react-native'

export default props => (
    <View style={{flex:1}}>
        <View>
            {props.avancar
                ? <Button
                        title="Avançar"
                        onPress={()=> {
                            props.navigation.push(props.avancar,{numero:10})
                        }}
                    />
                :   false
                }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>

    </View>
)