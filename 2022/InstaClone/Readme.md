# Passos para seguir no projeto

## 001 - Assets

- Criar o projeto
- Copiar a pasta assets

## 002 - Header

- Instalar a fonte shelter no SO
- Linkar os assets `npx react-native link`
- Instalar app `npx react-native run-android`

## 004 - Author

- Instalar o gravatar `yarn add react-native-gravatar`

## 006 - AddComment

- Instalar os icones `yarn add react-native-vector-icons`

## 008 - Bottom Navigation

- Instalar o navigation e dependências

```
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context

yarn add @react-navigation/bottom-tabs
```

## 009 - AddPhoto

- Instalar o image picker `yarn add react-native-image-picker`

- Reiniciar o metro `npx react-native start --reset-cache` e reinstalar a aplicação `npx react-native run-android`

## 012 - AuthOrProfile

- Instalar o navigation e dependências

```
yarn add @react-navigation/stack
yarn add react-native-gesture-handler
```

## 024 - Add Post no Firebase

- Criar um projeto no firebase
 - Criar uma realtime database
- Instalar o axios `yarn add axios`

## 026 - Storage #1

- Alterar o plano do firebase para o Blaze
- Executar alguns comandos para preparar o projeto de functions

```
npm install -g firebase-tools
firebase login
firebase init
```

-Entrar na pasta "functions" e instalar os pacotes `yarn add @google-cloud/storage cors uuid-v4`
    - Versão mínima do node: 16.x

## 027 - Storage #2

- Obter o projectId e keyFile no Firebase
    - Project Overview > Project Settings > General
    - Project Overview > Project Settings > Service Accounts

## 028 - Storage #3

- Fazer o deploy da function
    - Na pasta raiz do projeto, executar: `firebase deploy`
    - Atentar para não executar na pasta das functions


## 036 - Token

- Alterar as Rules do "Realtime database"
```
{
  "rules": {
    ".read": "now < 1644472800000",
    ".write": "auth != null",  
    "users": {
      "$id": {
        ".write": "!data.exists()"
      }
    }
  }
}
```