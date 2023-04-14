import React, { useState } from 'react'

export default function List() {
    const [list, setList] = useState([])

    const handleFetch = () => {
        fetch('http://kepzes.appworld.hu/api/products.php')
            .then(res => res.json())
            .then(res => {
                setList(res)
            })
    }

    return (
        <div>
            <button className={"btn2"} onClick={() => handleFetch()}>Get list</button>
            <ul>
                {list.products && list.products.map((e) => (
                    <li key={e.id}>
                        {e.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
