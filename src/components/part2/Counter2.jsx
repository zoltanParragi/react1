import React from 'react'
import { useState } from 'react'
import style from './../counter/Counter.module.css'
import store from './../../store'

export default function Counter2() {
    const [num, setNum] = useState(store.getState().num)
    store.subscribe(() => {
        setNum(store.getState().num)
    })
    return (
        <div>
            <div style={{ "fontSize": "40px", "color": "black", "fontWeight": "bold" }}>{num}</div>

            <button className={style.bg + ' ' + style.border + ' ' + style.padding} onClick={() =>
                store.dispatch({
                    type: 'COUNT',
                    operation: 'increment'
                })}>
                +1
            </button >

            <button className={style.bg + ' ' + style.border + ' ' + style.padding} onClick={() => store.dispatch({
                type: 'COUNT',
                operation: 'decrement'
            })}>
                -1
            </button >

            <button className={style.bg + ' ' + style.border + ' ' + style.padding} onClick={() => store.dispatch({
                type: 'COUNT',
                operation: 'byamount',
                amount: 9
            })}>
                +9
            </button >

            <button className={style.bg + ' ' + style.border + ' ' + style.padding} onClick={() => store.dispatch({
                type: 'COUNT',
                operation: 'byamount',
                amount: -9
            })}>
                -9
            </button >
        </div>
    )
}
