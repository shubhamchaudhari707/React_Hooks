import React, { useRef, useEffect } from 'react'

const UseRefHooks = () => {
    // let newRef = useRef()
    let firstRef = useRef()
    let secondRef = useRef()

    useEffect(() => {
        // console.log(newRef);
        // console.log(newRef.current.innerHTML);
        firstRef.current.focus()
        firstRef.current.style.color = 'red'
        firstRef.current.style.backgroundColor = 'yellow'
    })

    const handleHeading = () => {
        // newRef.current.style.color = 'red'
        // newRef.current.style.fontFamily = 'cooper'
        // // newRef.current.hidden = true
    }

    const FormSubmit=(e)=>{
        e.preventDefault()
        console.log('Full name = ',firstRef.current.value, secondRef.current.value)
    }

    return (
        <>
            {/* <h1 ref={newRef}>useRef Hooks uncontrolled forms</h1>
        <button onClick={handleHeading}>Click me</button> */}

            <form onSubmit={FormSubmit}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text"  ref={firstRef}/>
                </div>
                <div>
                    <label htmlFor="">Second Name</label>
                    <input type="text" ref={secondRef}/>
                </div>

                <button>Submit</button>
            </form>

        </>
    )
}

export default UseRefHooks