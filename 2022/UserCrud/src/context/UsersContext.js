import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({})

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user],
        }
    },
    updateUser(state, action) {
        const updated = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === updated.id ? updated : u)
        }
    },
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext