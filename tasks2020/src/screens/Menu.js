import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'

export default props => {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Gravatar style={styles.avatar} 
                    options={{
                        email: props.navigation.getParam('email'),
                        secure: true
                    }} />
                <View style={styles.userInfo}>
                    <Text>{props.navigation.getParam('name')}</Text>
                    <Text>{props.navigation.getParam('email')}</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        marginTop: Platform.OS === 'ios' ? 50 : 10
    }
})