import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import AddComment from './AddComment'
import Author from './Author'
import Comments from './Comments'

export default props =>
    <View style={styles.container}>
        <Image source={props.image} style={styles.image}/>
        <Author email='wcaquino@gmail.com' nickname='Wagner' />
        <Comments comments={props.comments} />
        <AddComment />
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})