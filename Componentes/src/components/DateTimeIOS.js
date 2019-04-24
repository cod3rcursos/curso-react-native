import React, { Component } from 'react';
import { Modal, View, Text, DatePickerIOS, StyleSheet, TouchableOpacity } from 'react-native'

export default class DateTimeIOS extends Component {
  state = {
    date: this.props.date,
  }

  render() {
    return (
      <Modal onRequestClose={this.props.onCancel} visible={this.props.isVisible} animationType='slide'
        transparent={true} supportedOrientations={['portrait', 'landscape']}>
        <View style={styles.offset}></View>
        <View style={styles.container}>
          <Text style={styles.header}>Choose your Date and Time...</Text>;
          <DatePickerIOS mode='datetime' date={this.state.date} onDateChange={date => this.setState({ date })} />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.onSave(this.state.date)}>
              <Text style={styles.button}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.offset}></View>
      </Modal>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  offset: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: "#3b8799",
  },
  header: {
    backgroundColor: "#3b8799",
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
})