import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

import useUser from '../data/hooks/useUser'

export default props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { createUser } = useUser()

    return (
        <View style={styles.container}>
            <TextInput placeholder='Nome' style={styles.input}
                autoFocus={true} value={name} onChangeText={setName} />
            <TextInput placeholder='Email' style={styles.input} value={email}
                keyboardType='email-address' onChangeText={setEmail} />
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={() => createUser({name, email, password})} style={styles.buttom}>
                <Text style={styles.buttomText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})