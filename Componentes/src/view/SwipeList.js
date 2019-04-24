import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';

class SwipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estados: ['', '', '+', '', '', '-', '+', '', '-', '', '+', ''],
    }
  }

  swipeable = [null, null, null, null, null, null, null, null, null, null, null, null];

  getColor = (index) => {
    const estado = this.state.estados[index];
    switch (estado) {
      case '+': return '#D3D5D4';
      case '-': return '#878E99';
      default: return '#A2C5AC';
    }
  }

  getComplemento = (index) => {
    const estado = this.state.estados[index];
    switch (estado) {
      case '+': return ' (+)';
      case '-': return ' (-)';
      default: return '';
    }
  }

  getLeftContent = () => (
    <View style={[styles.esquerda, { backgroundColor: '#7F6A93' }]}>
      <Text style={styles.text}>Reset</Text>
    </View>
  );

  getRightButtons = (index) => [
    <TouchableOpacity style={[styles.direita, { backgroundColor: '#D3D5D4' }]}
      onPress={() => this.handleRightButtom1Pressed(index)}>
      <Text style={styles.text} >(+)</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={[styles.direita, { backgroundColor: '#878E99' }]}
      onPress={() => this.handleRightButtom2Pressed(index)}>
      <Text style={styles.text} >(-)</Text>
    </TouchableOpacity>,
  ];

  handleRightButtom1Pressed = (index) => {
    const estados = [...this.state.estados];
    estados[index] = '+';
    this.setState({ estados });
    this.swipeable[index].recenter();
  }

  handleRightButtom2Pressed = (index) => {
    const estados = [...this.state.estados];
    estados[index] = '-';
    this.setState({ estados });
    this.swipeable[index].recenter();
  }

  handleLeftActionActivated = (index) => {
    const estados = [...this.state.estados];
    estados[index] = '';
    this.setState({ estados });
  }

  storeSwipeReference = (index, ref) => {
    this.swipeable[index] = ref;
  }

  createNewLine = (index) => (
    <Swipeable leftActionActivationDistance={200} onRef={ref => this.storeSwipeReference(index, ref)}
      onLeftActionActivate={() => this.handleLeftActionActivated(index)}
      leftContent={this.getLeftContent(index)} rightButtons={this.getRightButtons(index)}>
      <View style={[styles.main, { backgroundColor: `${this.getColor(index)}` }]}>
        <Text style={styles.text}>Opção {index}{this.getComplemento(index)}</Text>
      </View>
    </Swipeable>
  )

  render() {
    console.log(this.state)
    return (
      <View>
        {this.createNewLine(1)}
        {this.createNewLine(2)}
        {this.createNewLine(3)}
        {this.createNewLine(4)}
        {this.createNewLine(5)}
        {this.createNewLine(6)}
        {this.createNewLine(7)}
        {this.createNewLine(8)}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  main: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#333333',
    borderBottomWidth: 1,
  },
  direita: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    borderColor: '#333333',
    borderBottomWidth: 1,
  },
  esquerda: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    borderColor: '#333333',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20
  },
})

export default SwipeList