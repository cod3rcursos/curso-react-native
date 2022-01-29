import React, { createContext, useState } from "react"

const FeedContext = createContext({})

export const FeedProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const feedInternalContext = {
        posts
    }

    return (
        <FeedContext.Provider value={feedInternalContext}>
            {children}
        </FeedContext.Provider>
    )
}

export default FeedContext