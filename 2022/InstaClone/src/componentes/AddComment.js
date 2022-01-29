import React, { useState } from "react"
import { 
    TextInput, 
    View, 
    Text,
    TouchableWithoutFeedback as TWF,
    StyleSheet
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import useFeed from "../data/hooks/useFeed"
import useUser from "../data/hooks/useUser"

export default ({postId}) => {
    const [comment, setComment] = useState('')
    const [editMode, setEditMode] = useState(false)
    const { addComment } = useFeed()
    const { name: nickname } = useUser()

    const handleAddComment = () => {
        addComment(postId, {nickname, comment})
        setComment('')
        setEditMode(false)
    }

    let commentArea = null
    if (editMode) {
        commentArea = (
            <View style={styles.container}>
                <TextInput placeholder="Pode comentar..."
                    style={styles.input} autoFocus={true}
                    value={comment} onChangeText={setComment}
                    onSubmitEditing={handleAddComment} />
                <TWF onPress={() => setEditMode(false)}>
                    <Icon name='times' size={15} color='#555' />
                </TWF>
            </View>
        )
    } else {
        commentArea = (
            <TWF onPress={() => setEditMode(true)}>
                <View style={styles.container}>
                    <Icon name='comment-o' size={25} color='#555' />
                    <Text style={styles.caption}>Adicione um comentário...</Text>
                </View>
            </TWF>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {commentArea}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})