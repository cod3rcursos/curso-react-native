import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const options = [
  { title: 'Formulário', icon: 'list' },
  { title: 'Flexbox', icon: 'sitemap' },
  { title: 'Bandeira', icon: 'flag' },
  { title: 'Clicks', icon: 'hand-o-up' },
  { title: 'Tabs', icon: 'window-restore' },
  { title: 'Accordion', icon: 'angle-down' },
  { title: 'Drag and drop', icon: 'sort' },
  { title: 'Swipe', icon: 'arrow-right' },
  { title: 'SwipeList', icon: 'text-width' }];

class Menu extends React.Component {

  handleClick = opcao => {
    switch (opcao) {
      case 'Formulário': this.props.navigation.navigate('Formulario'); break;
      case 'Flexbox': this.props.navigation.navigate('Flexbox'); break;
      case 'Bandeira': this.props.navigation.navigate('Bandeira'); break;
      case 'Clicks': this.props.navigation.navigate('Clicks'); break;
      case 'Tabs': this.props.navigation.navigate('Tabs'); break;
      case 'Accordion': this.props.navigation.navigate('FAQ'); break;
      case 'Drag and drop': this.props.navigation.navigate('Cidades'); break;
      case 'Swipe': this.props.navigation.navigate('Food'); break;
      case 'SwipeList': this.props.navigation.navigate('SwipeList'); break;
      default: break;
    }
  }

  render() {
    const itemsMenu = options.map((option, index) => (
      <TouchableOpacity key={index} onPress={() => this.handleClick(option.title)}>
        <View style={styles.item}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '20%' }}>
              <Icon name={option.icon} style={styles.icon} />
            </View>
            <View style={{ width: '70%' }}>
              <Text style={styles.label}>{option.title}</Text>
            </View>
            <View>
              <Icon name='angle-right' style={styles.iconNext} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ))

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Components ShowCase</Text>
        </View>
        <ScrollView>
          {itemsMenu}
        </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: Platform.OS === 'android' ? 0 : 20
  },
  header: {
    backgroundColor: '#e0734c',
    padding: 20,
  },
  headerLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 25,
  },
  icon: {
    fontSize: 20,
    color: '#111',
    textAlign: 'center'
  },
  label: {
    fontSize: 15,
    color: '#111'
  },
  iconNext: {
    fontSize: 20,
    color: '#888',
  },
})

export default Menu;