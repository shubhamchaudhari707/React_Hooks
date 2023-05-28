import React, { useState } from 'react'

const UseState2 = () => {
    let obj = {
        name: 'vaibhav',
        age: 25,
        height: 5.11,
        isYoung: true
    }

    const [person, setPerson] = useState(obj)

    function changeState() {
        setPerson({
            name: 'Shubham',
            age: 30,
            height: 6.11,
            isYoung: false
        })

        // setPerson((previousData) => {
        //     return {
        //         ...previousData,
        //         name: 'Dhanjay'
        //     }
        // })
    }


    return (
        <>
            <h1>UseState using Object</h1>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.height}</h1>
            <h1>{person.isYoung.toString()}</h1>

            <button onClick={changeState}>Update</button>

        </>
    )
}

export default UseState2