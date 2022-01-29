import React, { createContext, useState } from "react"

const EventContext = createContext({})

export const EventProvider = ({ children }) => {
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageTitle, setMessageTitle] = useState('')

    const eventInternalContext = {
        uploading,
        messageTitle,
        message,
        startingUpload: function() {
            setUploading(true)
        },
        finishedUpload: function() {
            setUploading(false)
        },
        setMessage(message, title) {
            setMessage(message)
            setMessageTitle(title)
        },
        clearMessage() {
            eventInternalContext.setMessage('', '')
        }
    }

    return (
        <EventContext.Provider value={eventInternalContext}>
            {children}
        </EventContext.Provider>
    )
}

export default EventContext