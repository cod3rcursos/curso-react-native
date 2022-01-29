import React, { createContext, useState } from "react"
import axios from 'axios'

const FeedContext = createContext({})

export const FeedProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafaelprrflh@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
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
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }
    ])

    const feedInternalContext = {
        posts,
        addPost: async function(post) {
            try {
                await axios.post('/posts.json', post)
            } catch(err) {
                console.log(err)
            }
        },
        addComment: function(postId, comment) {
            const postsTemp = posts.map(post => {
                if(post.id === postId) {
                    if(!post.comments) {
                        post.comments = []
                    } 
                    post.comments = post.comments.concat( comment )
                }
                return post
            })
            setPosts(postsTemp)
        }
    }

    return (
        <FeedContext.Provider value={feedInternalContext}>
            {children}
        </FeedContext.Provider>
    )
}

export default FeedContext