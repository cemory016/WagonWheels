import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
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
        <form method="post" action="/farmer/:farmerId?_method=PATCH">
        <label htmlFor="name">Farmer User Name</label>
            <input type="text" name="name"
              value={this.state.FarmerName}
              onChange={this.handleChange}
            />
        <label htmlFor="name">Password</label>
            <input type="text" name="name"
              value={this.state.FarmerPassword}
              onChange={this.handleChange}
            />
            </form>
            <br />
            <button type="submit">submit</button>
        <br />
        <h1>User Log In</h1>
        <label htmlFor="name">User Name</label>
            <input type="text" name="name"
              value={this.state.UserName}
              onChange={this.handleChange}
            />
        <label htmlFor="name">Password</label>
            <input type="text" name="name"
              value={this.state.UserPassword}
              onChange={this.handleChange}
            />
      </div>
    )
  }
}

export default LogIn