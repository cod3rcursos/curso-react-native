import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import icon from '../../assets/imgs/icon.png'

import useUser from '../data/hooks/useUser'

export default props => {
    const { name, email } = useUser()

    const username = name || 'Anonymous'
    const gravatar = email ?
        <Gravatar options={{email, secure: true}}
            style={styles.avatar} />
        : null

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image}/>
                <Text style={styles.title}>Lambe Lambe</Text>
            </View>
            <View style={styles.userContainer}>
                <Text style={styles.user}>{username}</Text>
                {gravatar}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: "#000",
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        fontSize: 10,
        color: '#888'
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
})