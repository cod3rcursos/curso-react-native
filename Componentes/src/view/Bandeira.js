import React from 'react';
import { View, StyleSheet } from 'react-native'

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.losango}>
        <View style={styles.circulo}></View>
      </View>   
    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#044f09',
    alignItems: 'center',
    justifyContent: 'center'
  },
  losango: {
    width: 300,
    height: 300,
    backgroundColor: 'yellow',
    transform: [{ rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center'
  },
  circulo: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    borderRadius: 100
  }
})