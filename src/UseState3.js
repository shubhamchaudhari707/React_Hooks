import React, { useState } from 'react'

const UseState3 = () => {
    let num = [11, 22, 33, 44]

    const [number, setNumber] = useState(num)

    function changeList() {
        setNumber([55, 66, 77, 88])
    }

 
    return (
        <>
            <h1>UseState using Array</h1>
            <ul>
                {number.map((n, i) => <li key={i}>{n}</li>)}
            </ul>

            <button onClick={changeList}>Update</button>
        </>
    )
}

export default UseState3