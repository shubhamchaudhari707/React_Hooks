import React, { useState } from 'react'

const ControlledFormFunction1 = () => {

    const [userRegistraction, setUserRegistraction] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""

    })
    
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name, value)
        setUserRegistraction({ ...userRegistraction, [name]: value })
    }
    
    let [allentry, setAllentry] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()

        const newRecord = { ...userRegistraction }
        setAllentry([...allentry, newRecord])


        setUserRegistraction({
            username: "",
            email: "",
            phone: "",
            password: ""
        })
    }


    return (
        <>

            <form onSubmit={handleSubmit}>

                <div>
                    <label >Full Name</label>
                    <input type="text" value={userRegistraction.username} onChange={handleInput} name='username' autoComplete='off' />
                </div>
                <div>
                    <label >Email</label>
                    <input type="text" value={userRegistraction.email} onChange={handleInput} name='email' autoComplete='off' />
                </div>
                <div>
                    <label >Phone</label>
                    <input type="phone" value={userRegistraction.phone} onChange={handleInput} name='phone' autoComplete='off' />
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" value={userRegistraction.password} onChange={handleInput} name='password' autoComplete='off' />
                </div>
                <br />
                <button type='submit'>Registraction</button>
            </form>


            {
                allentry.map((elem) => {
                    let { username, email, phone, password } = elem
                    return (
                        <div>
                            <h4> {username} : {email} : {phone} : {password} </h4>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ControlledFormFunction1