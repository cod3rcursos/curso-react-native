import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Slider,
  Picker,
  Button,
  Alert,
  Dimensions,
  Platform,
  TouchableOpacity,
  AlertIOS,  //Não muda nada nesse ponto, mas permite usar o prompt, caso deseje
  ToastAndroid,
  DatePickerAndroid,
  TimePickerAndroid,
} from 'react-native';
import moment from 'moment';

import DTiOS from '../components/DateTimeIOS';

isAndroid = () => {
  return Platform.OS === 'android';
}

isLandscape = () => {
  return Dimensions.get('window').width > Dimensions.get('window').height;
}

getHeight = () => {
  return Dimensions.get('window').height;
}

getWidth = () => {
  return Dimensions.get('window').width;
}

getHorizonMarginBase = () => {
  return getWidth() * 0.05;
}

getVerticalLabelMarginBase = () => {
  return getHeight() * 0.05;
}

getVerticalInputMarginBase = () => {
  return getHeight() * 0.02;
}

export default class App extends Component {
  state = {
    nome: '',
    switch: true,
    slider: 30,
    opcao: 'b',
    date: new Date(),
    showDTiOS: false,
  }

  constructor(props) {
    super(props);
    console.log('aqui');
    Dimensions.addEventListener('change', this.orientationChanged)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.orientationChanged)
  }

  orientationChanged = evt => {
    this.setState({});
  }

  sendMessage = message => {
    if (isAndroid()) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('Info', message);
    }
  }

  alertSimples = () => {
    Alert.alert('Salvo', 'Pode clicar no OK ou fora da caixa para sair');
  }

  alertConfirm = () => {
    const resposta = `Nome: ${this.state.nome}\nSwitch: ${this.state.switch ? 'Ligado' : 'Desligado'}\nSlider: ${this.state.slider}\nOpção: ${this.state.opcao}\nDate: ${this.state.date}`;

    Alert.alert('Info', 'Confirma a operação?', [
      {
        text: 'Confirmar', onPress: () => {
          Alert.alert('Info', resposta, [
            {
              text: 'Sair', onPress: () => {
                this.setState({ nome: '', switch: true, slider: 30, opcao: 'b', date: new Date() });
                this.sendMessage('Agora sim, está salvo...');
              }
            }
          ], { cancelable: false });
        }
      },
      {
        text: 'Cancelar'
      },
    ], { cancelable: false });
  }

  handleDateChanged = () => {
    if (isAndroid()) {
      DatePickerAndroid.open({
        date: this.state.date
      }).then(action => {
        if (action.action !== DatePickerAndroid.dismissedAction) {
          const momentDate = moment(this.state.date);
          momentDate.date(action.day);
          momentDate.month(action.month);
          momentDate.year(action.year);
          this.setState({ date: momentDate.toDate() });
        }
      })
    } else {
      this.setState({ showDTiOS: true })
    }
  }

  handleTimeChanged = () => {
    if (isAndroid()) {
      const momentDate = moment(this.state.date);
      TimePickerAndroid.open({
        hour: momentDate.hour(), minute: momentDate.minute(), is24Hour: true
      }).then(action => {
        if (action.action !== TimePickerAndroid.dismissedAction) {
          momentDate.hour(action.hour);
          momentDate.minute(action.minute);
          this.setState({ date: momentDate.toDate() });
        }
      })
    } else {
      this.setState({ showDTiOS: true })
    }
  }

  render() {
    const styles = getStyles();

    let switchSliderPortrait = (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={styles.label}>SWITCH</Text>
          <Switch value={this.state.switch} style={{ marginTop: getVerticalLabelMarginBase() }}
            onValueChange={() => this.setState(prevState => { return { switch: !prevState.switch } })} />
        </View>
        <Text style={[styles.label]}>SLIDER</Text>
        <Slider minimumValue={0} maximumValue={100} step={10} style={{ width: '90%', marginTop: getVerticalInputMarginBase(), marginLeft: getHorizonMarginBase() }}
          value={this.state.slider} onValueChange={slider => this.setState({ slider })} />
      </View>
    );

    let switchSliderLandscape = (
      <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginRight: getWidth() * 0.05 }}>
        <Text style={[styles.label]}>SWITCH</Text>
        <Switch value={this.state.switch} style={{ marginTop: getVerticalInputMarginBase() }}
          onValueChange={() => this.setState(prevState => { return { switch: !prevState.switch } })} />
        <Text style={styles.label}>SLIDER</Text>
        <Slider minimumValue={0} maximumValue={100} step={10} style={[styles.slider, { width: "40%", marginTop: getVerticalLabelMarginBase(), marginLeft: getHorizonMarginBase() }]}
          value={this.state.slider} onValueChange={slider => this.setState({ slider })} />
      </View>
    );

    let switchSlider = switchSliderPortrait;
    if (isLandscape()) {
      switchSlider = switchSliderLandscape;
    }

    return (
      <View style={styles.container}>
        <DTiOS date={this.state.date} isVisible={this.state.showDTiOS}
          onSave={date => this.setState({ date, showDTiOS: false })} onCancel={() => this.setState({ showDTiOS: false })} />
        <View>
          <Text style={styles.label}>NOME</Text>
          <TextInput placeholder="Qualquer nome serve..." style={styles.input}
            onChangeText={nome => this.setState({ nome })} value={this.state.nome} underlineColorAndroid="transparent" />
          {switchSlider}
          <Text style={styles.label}>PICKER</Text>
          <View style={styles.picker}>
            <Picker selectedValue={this.state.opcao} itemStyle={{ height: 50 }}
              onValueChange={opcao => this.setState({ opcao })}>
              <Picker.Item label='Opcao A' value='a' />
              <Picker.Item label='Opcao B' value='b' />
              <Picker.Item label='Opcao C' value='c' />
            </Picker>
          </View>
          <View style={styles.dateTimeContainer}>
            <View>
              <Text style={[styles.label, { marginLeft: 0 }]}>DATE</Text>
              <TouchableOpacity onPress={this.handleDateChanged}>
                <Text style={styles.dateTime}>
                  {moment(this.state.date).format('DD/MM/YYYY')}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={[styles.label, , { marginLeft: 0 }]}>TIME</Text>
              <TouchableOpacity onPress={this.handleTimeChanged}>
                <Text style={styles.dateTime}>
                  {moment(this.state.date).format('HH:mm')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View >
        <TouchableOpacity onPress={() => this.alertConfirm()}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ededed',
      justifyContent: 'space-between'
    },
    header: {
      backgroundColor: "#3b8799",
      marginTop: isAndroid() ? 0 : 20,
      padding: 15,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
    },
    label: {
      color: "#3b8799",
      marginTop: getVerticalLabelMarginBase(),
      marginLeft: getHorizonMarginBase(),
      fontSize: 15,
    },
    input: {
      width: '90%',
      height: 40,
      marginTop: getVerticalInputMarginBase(),
      marginLeft: getHorizonMarginBase(),
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#e5e3e3',
      borderRadius: 6
    },
    picker: {
      width: '90%',
      marginTop: 5,
      marginLeft: getHorizonMarginBase(),
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#e5e3e3',
      borderRadius: 6,
      overflow: 'hidden'
    },
    button: {
      backgroundColor: '#403ba0',
      height: getHeight() * 0.1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textButton: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
    },
    dateTimeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginLeft: getHorizonMarginBase(),
      marginRight: getHorizonMarginBase(),
    },
    dateTime: {
      marginTop: getVerticalInputMarginBase(),
      fontSize: 15,
    },
  });
}

