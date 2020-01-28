# Passos necessários para atualizar o projeto

* **Data da atualização**: 16/12/2019
* **Versão do ReactNative**: 0.61.5
* **Versão do node**: 12.13.1

## Instalação inicial

### Pré condições

Remover o cli antigo para usar o npx

Atualizar o node para não ter problemas com versões, usando a última LTS disponível: 12.13.1

### Usando o npx

```
npx react-native init tasks2020 --version 0.61.5
```

Depois que subir o emulador, executar na pasta do projeto:

```
npx react-native run-android
```

A aplicação básica já deve iniciar no emulador.

### Trazendo o código para o projeto novo

1. Copiar toda a pasta `assets`
2. Copiar toda a pasta `src`
3. No arquivo `index.js`, importar o `App` a partir do diretório `'./src/Navigator'`
4. No arquivo `package.json`
   1. Na sessão `dependencies`, trazer todas as libs, com exceção do `react` e `react-native`. *(Pode trazer nas versões antigas mesmo, serão atualizadas ao longo desse documento)*
   2. Trazer também a sessão `rnpm`

### Executando o projeto

1. Baixar os pacotes restantes com `npm install`
2. Subir o *metro bundler* em um terminal separado com `npm run start` e aguardar até que ele indique que está no ar
3. Linkar as dependências com `./node_modules/.bin/react-native link`
4. Reinstalar a aplicação com os códigos novos através do comando `npm run android`

Com isso, a aplicação estará no ar, porém terá uma série de warnings a serem corrigidos...

## Removendo os warnings

Para remover os warnings, será necessário atualizar as dependências e alguns códigos.

### ComponentWillMount

No arquivo `AuthOrApp.js`, trocar o `componentWillMount` por `componentDidMount`

Ainda vão aparecer mensagens sobre o `componentWillMount`, mas são por conta das dependências.

### AsyncStorage

Agora ele está em uma lib separada...

```
npm i @react-native-community/async-storage
```

1. Atualizar nos pontos onde ela é utilizada. 
   1. Auth.js
   2. AuthOrApp.js
   3. Menu.js
2. Retirar o import que buscava ela no `react-native`. 
3. Adicionar o import:

```
import AsyncStorage from '@react-native-community/async-storage';
```

Para testar, executar `npm run android`.

### Assets e Icons

Apagar a sessão `rnpm` do `package.json` e criar o arquivo `react-native.config.js`, na raiz do projeto, com o seguinte conteúdo:

```
module.exports = {
    assets: ['./assets/fonts/']
};
```

Atualizar a versão do `react-native-vector-icons` executando os seguintes passos

1. `npm uninstall react-native-vector-icons`
2. `npm install react-native-vector-icons`
3. `./node_modules/.bin/react-native link`
4. `npm run android`

### Navigation

A maior mudança será com o Navigation, que foi da versão 2 para a 4. *A versão 5 já está sendo prometida, mas ainda está na versão alpha*

Dessa forma, vamos remover a versão antiga, adicionar a nova e algumas novas dependências, através dos comandos:

1. `npm uninstall react-navigation`
2. `npm install react-navigation`
3. `npm install react-native-reanimated`
4. `npm install react-native-gesture-handler`
5. `npm install react-native-screens@^1.0.0-alpha.23`
6. `npm install react-navigation-drawer`
7. `./node_modules/.bin/react-native link`
8. `npm run android`

E fazer os seguintes ajustes no código:

1. No arquivo `Menu.js`, importar o `DrawerItems` de `'react-navigation-drawer'`
2. No arquivo `Navigator.js`:
   1. Adicionar o `createAppContainer` no import do `react-navigation`
   2. Remover o `createDrawerNavigator` do import do `react-navigation`
   3. Adicionar a seguinte linha de import `import { createDrawerNavigator } from 'react-navigation-drawer'`
   4. Trocar a última linha (do *export default*), por: `export default createAppContainer(MainNavigator)`

Se tiver algum erro genérico, do tipo: "Module AppRegistry is not a registered callabel module", fechar o *metro bundler* e reiniciar através do comando `npm run start -- --reset-cache`. Executar `npm run android` no outro terminal, novamente.

### ActiveButton

Essa lib foi descontinuada. Dessa forma, vamos substituir o botão "manualmente".

```
npm uninstall react-native-action-button
```

No arquivo `Agenda.js`:

1. Remover o import do `ActionButton`
2. No método `render`, trocar o uso do ActionButton pelo seguinte código
  ```
  <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => { this.setState({ showAddTask: true }) }}
        style={styles.TouchableOpacityStyle}>
        <Icon name='plus' size={20} color={commonStyles.colors.secondary} />
    </TouchableOpacity>
  ```
3. Adicionar também o estilo necessário: 
```
TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: commonStyles.colors.default,
    borderRadius: 25,
}
```

### Swipeable

Esse foi outra lib que também foi descontinuada. Nesse caso, vamos utilizar uma outra lib que já veio no meio das novas dependências do `react-navigation` que é a `react-native-gesture-handler`

```
npm uninstall react-native-swipeable
```

#### No arquivo `MainActivity.java`:

Adicionar os imports

```
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

E adicionar o método

```
@Override
protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
    };
}
```

#### No arquivo `Task.js`

Trocar o import do `swipeable` por `import Swipeable from 'react-native-gesture-handler/Swipeable';`

Trocar os métodos `leftContent` e `rightContent` por

```
const leftContent = () => {
    return (
        <View style={styles.left}>
            <Icon name='trash' size={20} color='#FFF' />
            <Text style={styles.excludeText}>Excluir</Text>
        </View>
    );
};

const rightContent = () => {
    return (
        <TouchableOpacity
            style={styles.right}
            onPress={() => props.onDelete(props.id)}>
            <Icon name='trash' size={30} color='#FFF' />
        </TouchableOpacity>
    );
};
```

No `return`, trocar a chamada ao `Swipeable`, por:

```
<Swipeable
    renderLeftActions={leftContent}
    onSwipeableLeftOpen={() => props.onDelete(props.id)}
    renderRightActions={rightContent}
>
```

Nos estilos:

1. Adicionar `backgroundColor: 'white'` no `container`
2. Adicionar os estilos:

```
left: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
},
right: {
    // flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
},
```

### DatePicker

O DatePicker migrou do `react-native` para o `@react-native-community/datetimepicker`

```
npm install @react-native-community/datetimepicker
```

No arquivo `AddTask.js`

1. Retirar os imports do `DatePickerAndroid` e `DatePickerAndroid` 
2. Adicionar `import DateTimePicker from '@react-native-community/datetimepicker';`
3. Trocar o conteúdo do método `handleDateAndroidChanged` para apenas `this.setState({ show: true })`
4. Trocar o conteúdo no `render` que fica antes do `return` para
```
let datePicker = <DateTimePicker value={this.state.date}
    mode={'date'}
    onChange={(event, date) => this.setState({ date, show: false })} />

if (Platform.OS === 'android') {
    datePicker = (
        <View>
            <TouchableOpacity onPress={this.handleDateAndroidChanged}>
                <Text style={styles.date}>
                    {moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}
                </Text>
            </TouchableOpacity>
            {this.state.show && datePicker}
        </View>
    )
}
```

## Para uso no iOS

Para executar o projeto no iOS, alguns passos adicionais podem ser necessários:

1.`sudo gem install cocoapods`
2. `cd ios`
3. `pod install`
4. `cd ..`
5. `react-native run-ios`

### Possíveis problemas

#### Duplicated Files

Se aparecer uma mensagem do tipo 

```
error: Multiple commands produce '/Users/wcaquino/Documents/dev/react-native/curso-react-native/projetos/tasks2020/ios/build/tasks2020/Build/Products/Debug-iphonesimulator/tasks2020.app/AntDesign.ttf':
```

Abrir o projeto no XCode e, clicando na raiz do projeto, em `Build Phases`, abrindo a opção `[CP] Copy Pods Resources`, apagar os arquivos das fonts no `Input Files` e `Output Files`

#### RTCBridge required dispatch_sync...

Se aparecer esse erro, editar o arquivo `AppDelegate.m`, adicionando esse trecho nos imports

```
#if RCT_DEV
  #import <React/RCTDevLoadingView.h>
#endif
```

e esse trecho abaixo da linha que começa `RCTBridge *bridge...`

```
#if RCT_DEV
    [bridge moduleForClass:[RCTDevLoadingView class]];
#endif
```

#### Error building: 'React/RCTBridgeDelegate.h' file not found; 'React/RCTBridge.h' file not found

1. Apagar a pasta `ios/build`
2. No XCode, entrar no menu `File -> Project Settings -> Build System`, e em `Build System` selecionar `Legacy Build System`
3. Executar `react-native run-ios`


