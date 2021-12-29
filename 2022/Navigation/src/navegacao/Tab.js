import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'TelaB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'TelaC':
                        iconName = focused ? 'ios-list-circle-sharp' : 'ios-list-circle-outline'
                        break
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA}
            options={{ title: 'Inicial' }} />
        <Tab.Screen name="TelaB" component={TelaB}
            options={{ title: 'Meio' }} />
        <Tab.Screen name="TelaC" component={TelaC}
            options={{ title: 'Final' }} />
    </Tab.Navigator>
)