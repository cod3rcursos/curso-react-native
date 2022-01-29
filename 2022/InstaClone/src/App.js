import React from 'react'
import { Alert } from 'react-native'
import Navigator from './Navigator'
import useEffectIfNot from './hooks/UseEffectIfNot'

import useEvent from './data/hooks/useEvent'

export default props => {
    const { message, messageTitle, clearMessage } = useEvent()

    useEffectIfNot(() => {
        Alert.alert(messageTitle || 'Mensagem', message)
        clearMessage()
    }, [message], [''])

    return <Navigator/>
}