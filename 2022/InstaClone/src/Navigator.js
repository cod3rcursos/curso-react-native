import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'

const Tab = createBottomTabNavigator()

const routeIcon = {
    Feed: 'home',
    AddPhoto: 'camera',
    Profile: 'person'
}

export default props =>
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Feed"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => 
                        <Ionicons name={routeIcon[route.name]} size={size} color={color} />
                })}>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="AddPhoto" component={AddPhoto} />
            <Tab.Screen name="Profile" component={Login} />
        </Tab.Navigator>
    </NavigationContainer>