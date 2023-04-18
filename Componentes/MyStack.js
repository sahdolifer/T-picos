import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PassoStack from "./PassoStack";

const Stack = createNativeStackNavigator()

function MyStack() {
    return(
        <Stack.Navigator initialRouteName="TelaA">
            <Stack.Screen name="TelaA" component={TelaA}/>
            <Stack.Screen name="TelaB" component={TelaB}/>
            <Stack.Screen name="TelaC" component={TelaC}/>
        </Stack.Navigator>
    );
}

export default props => (
    <Stack.Navigator initialRoutName="TelaA"
        screenOptions={{headerShow: true}}>
        
        <Stack.Screen
            name="TelaA"
            component={TelaA}
            options={{title: "Informações iniciais"}}>
        </Stack.Screen>

        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack {...props} avancar="TelaC">
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack {...props} avancar="TelaA">
                    <TelaC/>
                </PassoStack>
            )}
        </Stack.Screen> 

    </Stack.Navigator>
)

/*export default 
}*/

//<Container>
    //<Stack.Navigator>
        //<Stack.Screen/>
        //.
        //.
        //.
    //</Stack.Navigator>
//</Container>

