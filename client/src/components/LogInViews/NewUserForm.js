import React, { Component } from "react";
import axios from 'axios'

class NewUserForm extends Component {
  state = {
    username: ''
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
        <h1>hey</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewUserForm;