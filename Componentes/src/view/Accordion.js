let React = require('react')
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Bandeira from './Bandeira';

class AccordionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sections: [
            { title: 'Clique aqui', content: 'Está vendo como funciona?', },
            { title: 'Mas e se eu clicar aqui?', content: 'Simples, fecha a de cima e abre essa aqui.', },
            { title: 'Funciona apenas com texto simples?', content: 'Não, pode colocar componentes também', showComponent: true },
            { title: 'E com imagens?', content: 'Claro que funciona também', showImage: true },
            { title: 'Até nos títulos?', content: 'Sim, inclusive nos títulos', showTitleImage: true },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
            { title: 'Apenas mais uma opção', content: 'Nada de novo por aqui', },
          ],
        }
    }
    
    _renderHeader = (section) => (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        {section.showTitleImage && <Image source={require('../../assets/clique-aqui.png')} style={{width: 380, height: 60}} />}
      </View>
    );
    
    _renderContent = (section) => (
      <View style={styles.content}>
        <Text>{section.content}</Text>
        {section.showComponent && <Bandeira />}
        {section.showImage && <Image source={require('../../assets/fortaleza.jpg')} style={{width: 350, height: 200}} />}
      </View>
    );
    
    render() {
      return (
        <ScrollView>

        <Accordion
          sections={this.state.sections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          />
          </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    //height: 600,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default AccordionView