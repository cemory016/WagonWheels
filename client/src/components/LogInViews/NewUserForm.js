import React, { Component } from "react";
import axios from 'axios'
import { Button, Card, Row, Col } from 'react-materialize'

class NewUserForm extends Component {
  state = {
    username: '',
    userpassword: '',
    userEmail: '',
  };


  handleChange = (event) => {
      const name = event.target.name
      const newState = {...this.state}
      newState[name] = event.target.value
      this.setState(newState)
  }

  handleSubmit = async (event) => {
      event.preventDefault()
      const payload = {
          username: this.state.username
      }
      console.log(this.state)
      await axios.post('/api/user', payload)
      await this.props.getAllUsers()
  }

  render() {
    return (
      <div>
        <h2>New User Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
          </div>
          <div>
            <label htmlFor="userpassword">password: </label>
            <input onChange={this.handleChange} type="text" name="userpassword" value={this.state.userpassword} />
          </div>
          <div>
            <label htmlFor="userEmail">Username: </label>
            <input onChange={this.handleChange} type="text" name="userEmail" value={this.state.userEmail} />
          </div>
          <Button waves='light' node='a'> Submit </Button>
        </form>
      </div>
    );
  }
}

export default NewUserForm;