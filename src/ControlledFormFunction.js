import React, { useState, useEffect } from 'react'

const ControlledFormFunction = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [allentry, setAllentry] = useState([])

    const SubmitForm = (e) => {
        e.preventDefault()

        if (email && password) {
            let newEntry = { id: new Date().getTime().toString(), email: email, password: password }
            setAllentry([...allentry, newEntry])

            setEmail("")
            setPassword("")
        }
        else {
            alert('plz data enter ')
        }
    }

    return (
        <>

            <form onSubmit={SubmitForm}>
                <div>
                    <label htmlFor="">Email : </label>
                    <input type="text" name='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Password : </label>
                    <input type="password" name='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button>Submit</button>
            </form>

            {
                allentry.map((elem) => {
                    const { id, email, password } = elem
                    return (
                        <div key={id}>
                            <h4 >{email}</h4>
                            <h4>{password}</h4>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ControlledFormFunction