import React, { createContext, useState } from "react"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const feedInternalContext = {
        name,
        email
    }

    return (
        <UserContext.Provider value={feedInternalContext}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext