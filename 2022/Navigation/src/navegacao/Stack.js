import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="TelaA"
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack {...props} voltar avancar="TelaC"
                    avancarParams={{ numero: 1007 }}>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack {...props} voltar avancar="TelaC">
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)