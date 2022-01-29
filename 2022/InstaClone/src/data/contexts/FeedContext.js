import React, { createContext, useState } from "react"

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
        addPost: function(post) {
            setPosts(posts.concat(post))
        }
    }

    return (
        <FeedContext.Provider value={feedInternalContext}>
            {children}
        </FeedContext.Provider>
    )
}

export default FeedContext