import React, { createContext, useState } from "react"

const EventContext = createContext({})

export const EventProvider = ({ children }) => {
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageTitle, setMessageTitle] = useState('')
    const [splash, setSplash] = useState(true)

    const eventInternalContext = {
        uploading,
        messageTitle,
        message,
        splash,
        startingUpload: function() {
            setUploading(true)
        },
        finishedUpload: function() {
            setUploading(false)
        },
        setMessage: function(message, title) {
            setMessage(message)
            setMessageTitle(title)
        },
        clearMessage: function() {
            eventInternalContext.setMessage('', '')
        },
        endSplash: function() {
            setSplash(false)
        }
    }

    return (
        <EventContext.Provider value={eventInternalContext}>
            {children}
        </EventContext.Provider>
    )
}

export default EventContext