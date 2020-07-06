import React from 'react'
import { Button } from 'react-native'

export default props => {

    const executar = () => {
        console.warn('Exec #01!!!')
    }

    return (
        <>
            <Button 
                title="Executar #01!"
                onPress={executar}
            />
            <Button 
                title="Executar #02!"
                onPress={function() {
                    console.warn('Exec #02!!!')
                }}
            />
            <Button 
                title="Executar #03!"
                onPress={() => console.warn('Exec #03!!!')}
            />
        </>
    )
}