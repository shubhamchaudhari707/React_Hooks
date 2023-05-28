import React, { useState } from 'react'

const UseStatePractice = () => {
    let [name, setName] = useState('Ford')
    let [count, setCount] = useState(0)

    function changName() {
        if(name == 'Ford'){
            setName('Fourtunare')
        }
        else{
            setName('Ford')
        }
    }
    function Increment() {
        setCount(count + 1)
    }
    const Decrement = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const [changestring, setchangestring] = useState("shubham")
    const [bg, setbg] = useState("red")


    const changeColour = () => {

        if (changestring == "shubham") {
            setchangestring("chaudhari")
            setbg("purple")
        }
        else {
            setchangestring("shubham")
            setbg("red")
        }
    }

    const biodata = [
        { id: 1, name: "shubham", age: "26" },
        { id: 2, name: "vaibhav", age: "27" },
        { id: 3, name: "dhanjay", age: "28" },
    ]

    const [myarray, setMyarray] = useState(biodata)
    const cleardata = () => {
        setMyarray([])
    }

    return (
        <>
            <h1>{name}</h1>
            <button onClick={changName}>Update</button>

            <h1>{count}</h1>
            <button onClick={Increment}>Inc</button>
            <button onClick={() => Decrement()}>Dec</button>

            <h1 style={{ color: bg }} >{changestring}</h1>
            <button onClick={changeColour} >click me</button>

            {
                myarray.map((value) => {
                    return (
                        <>
                            <h1>my name is {value.name} and age is {value.age} </h1>
                            <button >click me </button>
                        </>
                    )
                })
            }
            <br />
            <button onClick={cleardata}>clcik me</button>
        </>
    )
}

export default UseStatePractice