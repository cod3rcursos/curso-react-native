import { StackNavigator } from 'react-navigation';
import Menu from './src/view/Menu';
import Formulario from './src/view/Formulario';
import Flexbox from './src/view/FlexBoxTests';
import Bandeira from './src/view/Bandeira';
import Click from './src/view/Click';
import Tabs from './src/view/Tabs';
import Accordion from './src/view/Accordion';
import DragList from './src/view/DragList';
import Swipe from './src/view/Swipe';
import SwipeList from './src/view/SwipeList';


const App = StackNavigator({
  Menu: { screen: Menu, navigationOptions: { header: null } },
  Formulario: { screen: Formulario, navigationOptions: { title: 'Formulário' } },
  Flexbox: { screen: Flexbox, navigationOptions: { title: 'Flexbox' } },
  Bandeira: { screen: Bandeira, navigationOptions: { title: 'Bandeira' } },
  Clicks: { screen: Click, navigationOptions: { title: 'Clicks' } },
  Tabs: { screen: Tabs, navigationOptions: { title: 'Tabs' } },
  FAQ: { screen: Accordion, navigationOptions: { title: 'FAQ' } },
  Cidades: { screen: DragList, navigationOptions: { title: 'Cidades' } },
  Food: { screen: Swipe, navigationOptions: { header: null } },
  SwipeList: { screen: SwipeList, navigationOptions: { title: 'SwipeList' } },
},
  {
    navigationOptions: {
      headerStyle: { backgroundColor: '#3b8799' },
      headerTintColor: 'white'
    },
  }, );

export default App;