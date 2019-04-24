import React from 'react';
import { View, StyleSheet } from 'react-native'

//https://facebook.github.io/react-native/docs/flexbox.html

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <View style={styles.unit}></View>
      </View>
      <View style={styles.middleFrame}>
        <View style={styles.unit}></View>
        <View style={styles.unit}></View>
        <View style={[styles.unit, {backgroundColor: '#b7b5a5'}]}></View>
      </View>
      <View style={styles.bottomFrame}>
        <View style={styles.unit}></View>
      </View>
    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'nowrap'
  },
  topFrame: {
    flex: 1,
    backgroundColor: '#bdf9ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleFrame: {
    flex: 2,
    backgroundColor: '#f2f9bd',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  bottomFrame: {
    flex: 1,
    backgroundColor: '#bdf9c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unit: {
    width: 100,
    height: 100,
    backgroundColor: '#f47f61',
    borderRadius: 50,
  }
})