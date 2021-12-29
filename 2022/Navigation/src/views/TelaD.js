import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { View, Button } from 'react-native'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title='Abrir'
                    onPress={() => {
                        props.navigation.openDrawer()
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#33fa72' corTexto='#000'>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}