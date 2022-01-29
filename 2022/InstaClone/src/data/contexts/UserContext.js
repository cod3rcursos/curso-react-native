import React, { createContext, useState } from "react"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const userInternalContext = {
        name,
        email,
        login: function(email, password) {
            setName('Temporario')
            setEmail(email)
        }
    }

    return (
        <UserContext.Provider value={userInternalContext}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext