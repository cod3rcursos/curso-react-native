import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

export default props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {

    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.input}
                autoFocus={true} keyboardType='email-address'
                value={email} onChangeText={setEmail} />
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={password}
                onChangeText={setPassword} />
            <TouchableOpacity onPress={login} style={styles.buttom}>
                <Text style={styles.buttomText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                <Text style={styles.buttomText}>Criar nova conta...</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})