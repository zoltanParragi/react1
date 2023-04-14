import React from 'react'
import { useState } from 'react'
import style from './Counter.module.css'

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        //className={[style.bg, style.border, style.padding].join(' ')}
        <button className={style.bg + ' ' + style.border + ' ' + style.padding} onClick={() => setCount(count + 1)}>
            count is {count}
        </button >
    )
}
