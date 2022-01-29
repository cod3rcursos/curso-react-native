import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Navigator from './src/Navigator'
import { FeedProvider } from "./src/data/contexts/FeedContext"
import { UserProvider } from "./src/data/contexts/UserContext"

const Root = () => (
    <UserProvider>
        <FeedProvider>
            <Navigator/>
        </FeedProvider>
    </UserProvider>
)

AppRegistry.registerComponent(appName, () => Root);
