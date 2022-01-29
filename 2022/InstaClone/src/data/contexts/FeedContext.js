import React, { createContext, useState } from "react"
import axios from 'axios'

const FeedContext = createContext({})

export const FeedProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const feedInternalContext = {
        posts,
        fetchPosts: async function() {
            try {
                const res = await axios.get('/posts.json')
                const rawPosts = res.data
                const postsTemp = []
                for(let key in rawPosts) {
                    postsTemp.push({
                        ...rawPosts[key],
                        id: key
                    })
                }
                setPosts(postsTemp)
            } catch(err) {
                console.log(err)
            }
        },
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