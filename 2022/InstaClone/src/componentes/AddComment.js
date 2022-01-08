import React, { useState } from "react"
import { 
    Alert, 
    TextInput, 
    View, 
    Text,
    TouchableWithoutFeedback as TWF,
    StyleSheet
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    const [comment, setComment] = useState('')
    const [editMode, setEditMode] = useState(false)

    const handleAddComment = () => {
        Alert.alert('Adicionado!', comment)
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