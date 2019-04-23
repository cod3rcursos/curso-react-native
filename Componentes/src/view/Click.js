import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import DoubleClick from 'react-native-double-click';

export default class Click extends Component {
  state = {
    value: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsRow}>
          <TouchableHighlight onLongPress={() => this.setState({ value: 'Long Press' })}>
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>Long Press</Text>
            </View>
          </TouchableHighlight>
          <DoubleClick onClick={() => this.setState({ value: 'Double Click' })}>
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>Double Click</Text>
            </View>
          </DoubleClick>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TextInput value={this.state.value} editable={false} style={styles.input} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableWithoutFeedback onPress={() => this.setState({ value: '' })}>
            <View style={[styles.button, { width: "80%", alignItems: 'center' }]}>
              <Text style={styles.buttonLabel}>Clean</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#aaa',
    padding: 10,
  },
  buttonLabel: {
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    margin: 10,
    width: "80%"
  }
})