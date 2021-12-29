import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {LogBox } from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);

// import Drawer from './Drawer'
import Tab from './Tab'
// import Stack from './Stack'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            {/* <Drawer /> */}
            <Tab />
            {/* <Stack /> */}
        </NavigationContainer>
    </SafeAreaView>
)