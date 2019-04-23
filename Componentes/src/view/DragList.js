import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import SortableListView from 'react-native-sortable-listview'

let data = {
  ce: { cidade: 'Fortaleza', definicao: 'Terra da Luz', imagem: require('../../assets/fortaleza.jpg') },
  sp: { cidade: 'São Paulo', definicao: 'Terra da Garoa', imagem: require('../../assets/sp.jpg') },
  rj: { cidade: 'Rio de Janeiro', definicao: 'Cidade Maravilhosa', imagem: require('../../assets/rj.jpg') },
  pr: { cidade: 'Curitiba', definicao: 'Cidade Modelo', imagem: require('../../assets/pr.jpg') },
  ba: { cidade: 'Salvador', definicao: 'Capital da Alegria', imagem: require('../../assets/ba.jpg') },
  df: { cidade: 'Brasília', definicao: 'Capital Federal', imagem: require('../../assets/df.jpg') },
}

let order = Object.keys(data) //Array of keys

class RowComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight {...this.props.sortHandlers}>
        <View style={styles.container}>
          <Image source={this.props.data.imagem} style={styles.imagem} />
          <View style={styles.descricao}>
            <Text style={styles.titulo}>{this.props.data.cidade}</Text>
            <Text style={styles.subtitulo}>{this.props.data.definicao}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

class DragList extends React.Component {
  render() {
    return (
      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={order}
        onRowMoved={e => {
          //e:{from, to, object}
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  imagem: {
    width: 100,
    height: 100,
  },
  descricao: {
    marginLeft: 20,
    marginTop: 20
  },
  titulo: {
    fontSize: 30,
    color: '#555'
  },
  subtitulo: {
    fontSize: 15,
    color: '#aaa'
  },
});


export default DragList