import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native'
import App from './App';

//Removendo warnig bug... https://github.com/facebook/react-native/issues/18868
// RCT image tb está pendente... https://github.com/facebook/react-native/issues/17504

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
AppRegistry.registerComponent('Componentes', () => App);
