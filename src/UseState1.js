import React, { useState } from 'react'

const UseState1 = () => {

    let [state, setState] = useState('Shubham')
    let [brand, setBrand] = useState('Ford')
    let [year, setYear] = useState(1964)
    let [color, setColor] = useState('red')

    let [count, setCount] = useState(0)

    function updateData() {
        setState('Chaudhari')
        setBrand('Tata')
        setYear(1999)
        setColor('Yellow')
    }

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        if(count >= 1){
            setCount(count - 1)
        }
    }
    return (
        <>
            <h4>{state}</h4>
            <h4>{brand}</h4>
            <h4>{year}</h4>
            <h4>{color}</h4>
            <button onClick={updateData}>Update</button>

            <h4>{count}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default UseState1