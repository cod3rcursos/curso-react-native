import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

import Swiper from 'react-native-swiper';


class Swipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Swiper showsButtons={true} loop={false}>
        <View>
          <ImageBackground source={require('../../assets/pimenta.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, justifyContent: 'center', }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Esse é uma aplicativo de comida
            </Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground source={require('../../assets/pipoca.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, justifyContent: 'center', }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                Saiba mais detalhes...
            </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Image source={require('../../assets/cookie.jpg')} style={{ width: 400, height: 380 }} />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
              fontWeight: 'bold',
              margin: 20,
            }}
          >
            E clique aqui para conhecer mais!
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={{ backgroundColor: '#eee', alignItems: 'center' }}>
              <Text style={{ padding: 20, fontSize: 20 }}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swiper>
    )
  }
}

var styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default Swipe