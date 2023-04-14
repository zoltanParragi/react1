import React from 'react'

export default function colorButtons({ setColor }) {
    return (
        <div id="btns">
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("yellow")}>Yellow</button>
        </div>
    )
}
