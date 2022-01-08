import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../componentes/Header'
import Post from '../componentes/Post'

const posts = [{
    id: Math.random(),
    nickname: 'Rafael Pereira Filho',
    email: 'rafaelprrflh@gmail.com',
    image: require('../../assets/imgs/fence.jpg'),
    comments: [{
        nickname: 'John Ray Sheldon',
        comment: 'Stunning!'
    }, {
        nickname: 'Ana Julia Arruda',
        comment: 'Foto linda! Onder foi tirada?'
    }]
}, {
    id: Math.random(),
    nickname: 'Francisco Leandro Lima',
    email: 'fllima@gmail.com',
    image: require('../../assets/imgs/bw.jpg'),
    comments: []
}
]

export default props => 
    <View style={styles.container}>
        <Header />
        <FlatList
            data={posts} keyExtractor={item => `${item.id}`}
            renderItem={({item}) =>
                <Post key={item.id} {...item} />} />
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})