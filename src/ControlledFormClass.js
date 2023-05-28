import React, { Component } from 'react'

class ControlledFormClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: ""
    }
  }

  handleForm = (e) => {
    console.log(e.target.value)
    this.setState({
      data: e.target.value
      // data:e.target.value.toLowerCase()
      // data:e.target.value.toUpperCase()
      // data:e.target.value.toLowerCase().substring(0,15)
    })
  }

  handleFormSubmission = (e) => {
    console.log(e);
    e.preventDefault()
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmission}>

          <label htmlFor="">Enter Name :</label>
          <input type="text" value={this.state.data} onChange={this.handleForm} /> <br />

          <input type="submit" value='Submit' />

        </form>
      </>
    )
  }
}


export default ControlledFormClass;

