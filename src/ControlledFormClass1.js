import React, { Component, useState } from 'react'

export default class ControlledFormClass1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            username: '',
            contact: ''
        }
    }

    handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        const new_value = (e.target.name === 'email') ? e.target.value.toLowerCase().substring(0, 15) : e.target.value;
        this.setState({

            [e.target.name]: new_value
        })
    }


    render() {
        return (
            <>
                <form >
                    <label>Enter Name</label><br />
                    <input type="text" value={this.state.name} name='name' onChange={this.handleChange} /><br />

                    <label>Enter Email </label><br />
                    <input type="text" value={this.state.email} name='email' onChange={this.handleChange} /><br />

                    <label>Enter userName </label><br />
                    <input type="text" value={this.state.username} name='username' onChange={this.handleChange} /><br />

                    <label>Enter Contact no</label><br />
                    <input type="text" value={this.state.contact} name='contact' onChange={this.handleChange} /><br />

                    <button>Submit</button>
                </form>
            </>
        )
    }
}
