import React from 'react'
import store from './../../store'

export default function ColorButtons2() {
    return (
        <div id="btns">
            <button onClick={() => store.dispatch({
                type: "COLOR",
                payload: "blue"
            })}>Blue</button>
            <button onClick={() => store.dispatch({
                type: "COLOR",
                payload: "red"
            })}>Red</button>
            <button onClick={() => store.dispatch({
                type: "COLOR",
                payload: "yellow"
            })}>Yellow</button>
        </div>
    )
}
