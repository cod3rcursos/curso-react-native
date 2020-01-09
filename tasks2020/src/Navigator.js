import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: TaskList
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})
export default createAppContainer(mainNavigator)