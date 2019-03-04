import { SET_MESSAGE } from './actionTypes'

export const setMessage = message => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}