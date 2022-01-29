import React, { createContext, useState } from "react"
import axios from 'axios'

const FIREBASE_AUTH_BASE_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDjxPZYlXYyhz40ynbJ6HarXq4LQIGlijI'

import useEvent from '../hooks/useEvent'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')

    const { setMessage } = useEvent()

    const userInternalContext = {
        name,
        email,
        token,
        createUser: async user => {
            try {
                const resNewUser = await axios.post(`${FIREBASE_AUTH_BASE_URL}/signupNewUser?key=${API_KEY}`, {
                    email: user.email,
                    password: user.password,
                    returnSecureToken: true
                })
                if(resNewUser.data.localId) {
                    await axios.put(`/users/${resNewUser.data.localId}.json`, {
                        name: user.name
                    })
                    userInternalContext.login(user.email, user.password)
                }
            } catch (err) {
                setMessage(err.message, 'Erro')
            }
        },
        login: async function(email, password) {
            try {
                const resAuth = await axios.post(`${FIREBASE_AUTH_BASE_URL}/verifyPassword?key=${API_KEY}`, {
                    email,
                    password,
                    returnSecureToken: true
                })
                if(resAuth.data.localId) {
                    const res = await axios.get(`/users/${resAuth.data.localId}.json`)
                    setName(res.data.name)
                    setEmail(email)
                    setToken(resAuth.data.idToken)
                }
            } catch (err) {
                setMessage(err.message, 'Erro')
            }
        },
        logout: function() {
            setName('')
            setEmail('')
            setToken('')
        }
    }

    return (
        <UserContext.Provider value={userInternalContext}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext