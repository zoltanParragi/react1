import React from 'react'
import store from './../../store2'

export default function WidthSetter() {
    return (
        <div>
            <button
                style={{ "border": "1px solid black", "margin": "10px" }}
                onClick={() => store.dispatch({
                    type: "WIDTH",
                    payload: 20
                })}
            >width +10px</button>
            <button
                style={{ "border": "1px solid black", "margin": "10px" }}
                onClick={() => store.dispatch({
                    type: "WIDTH",
                    payload: -20
                })}
            >Width -10px</button>
        </div>
    )
}
