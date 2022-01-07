import React from 'react';
import { View } from 'react-native'
import Header from './src/componentes/Header';
import Post from './src/componentes/Post';

export default props => 
  <View style={{flex: 1}}>
    <Header/>
    <Post image={require('./assets/imgs/fence.jpg')}/>
  </View>