import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './src/App'
import { FeedProvider } from "./src/data/contexts/FeedContext"
import { UserProvider } from "./src/data/contexts/UserContext"
import { EventProvider } from "./src/data/contexts/EventContext"

import axios from 'axios'

axios.defaults.baseURL='https://instaclone-b78e8-default-rtdb.firebaseio.com/'

const Root = () => (
    <EventProvider>
        <UserProvider>
            <FeedProvider>
                <App/>
            </FeedProvider>
        </UserProvider>
    </EventProvider>
)

AppRegistry.registerComponent(appName, () => Root);
