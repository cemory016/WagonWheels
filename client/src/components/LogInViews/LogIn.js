import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    users: [],
    farmers: []
  }
  getAllUsers = () => {
    axios.get('localhost:3001/api/users').then(res => {
      this.setState({users: res.data})
    })
  }
  getAllFarmers = () => {
    axios.get('localhost:3001/api/farmers').then(res => {
      this.setState({farmers: res.data})
    })
  }
  componentDidMount () {
    this.getAllUsers(() => {
      this.getAllFarmers()
    })
  }
  render () {
    return (
      <div>
        <h1>Farmer Log In</h1>
        <label htmlFor="name">User Name</label>
            <input type="text" name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
        <p>user name</p>
        <p>password</p>
        <br />
        <h1>User Log In</h1>
        <p>user name</p>
        <p>password</p>
      </div>
    )
  }
}

export default LogIn