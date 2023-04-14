import React from 'react'
import store from './../../store2'
import { useState } from 'react'

export default function WidthAgent() {
    const [width, setWidth] = useState(store.getState())

    store.subscribe(() => {
        setWidth(store.getState())
    })

    return (
        <div style={{
            "height": "50px",
            "width": width + "px",
            "background": "green"
        }}>WidthAgent</div>
    )
} 
