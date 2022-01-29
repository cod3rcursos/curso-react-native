import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import AddComment from './AddComment'
import Author from './Author'
import Comments from './Comments'

import useUser from '../data/hooks/useUser'

export default props => {
    const { email } = useUser()

    const addComment = email? 
        <AddComment postId={props.id} />
        : null

    return (
        <View style={styles.container}>
            <Image source={{ uri: props.image }} style={styles.image}/>
            <Author email={props.email} nickname={props.nickname} />
            <Comments comments={props.comments} />
            {addComment}
        </View>
    )
}

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