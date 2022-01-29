import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import useEvent from '../data/hooks/useEvent'

export default props => {
    const { endSplash } = useEvent()

    useEffect(() => {
        setTimeout(endSplash, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/icon.png')}
                style={styles.image} />
            <Text style={styles.header}>InstaClone</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 50,
        color: "#000",
        fontFamily: 'shelter',
    }
})