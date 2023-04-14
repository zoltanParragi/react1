import React from 'react'
import store from './../../store'
import { useState } from 'react'

export default function Colors2() {
    const [color, setColor] = useState(store.getState().color)

    store.subscribe(() => {
        setColor(store.getState().color)
    })
    return (
        <div id="colors2" style={{ "background": color }}></div>
    )
}
