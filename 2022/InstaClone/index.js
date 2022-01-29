import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Navigator from './src/Navigator'
import { FeedProvider } from "./src/data/contexts/FeedContext"

const Root = () => (
    <FeedProvider>
        <Navigator/>
    </FeedProvider>
)

AppRegistry.registerComponent(appName, () => Root);
