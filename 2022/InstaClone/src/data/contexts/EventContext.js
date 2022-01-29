import React, { createContext, useState } from "react"

const EventContext = createContext({})

export const EventProvider = ({ children }) => {
    const [uploading, setUploading] = useState(false)

    const eventInternalContext = {
        uploading,
        startingUpload: function() {
            setUploading(true)
        },
        finishedUpload: function() {
            setUploading(false)
        }
    }

    return (
        <EventContext.Provider value={eventInternalContext}>
            {children}
        </EventContext.Provider>
    )
}

export default EventContext