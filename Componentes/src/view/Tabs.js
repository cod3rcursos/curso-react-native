import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Bandeira from './Bandeira';

const Aba1 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Este é o conteúdo da Aba 1</Text>
  </View>
);

const Aba2 = () => (
  <View style={{ flex: 1 }}>
    <Bandeira />
  </View>
);

const Tabbed = createBottomTabNavigator({
  Home: {
    screen: Aba1
  },
  Profile: {
    screen: Aba2,
    navigationOptions: {
      tabBarLabel: 'Aba 2',
    },
  },

}, {
    tabBarOptions: {
      showIcon: false,
      style: {
        alignItems: 'center'
      },
      labelStyle: {
        fontSize: 20,
      }
    }
  });

export default Tabbed;