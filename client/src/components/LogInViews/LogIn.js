import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { Button, Card, Row, Col } from 'react-materialize'

class LogIn extends Component {
  state = {
    users: [],
    farmers: [],
    redirectToUser: ''
  }
  handleChange = (event) => {
    const newState = { ...this.state }
    newState[event.target.username] = event.target.value
    this.setState(newState)
  }

  getAllUsers = () => {
    axios.get('/api/user').then(res => {
      // console.log(res.data)
      this.setState({ users: res.data })
    })
  }
  handleChange = (event) => {
    const newState = { ...this.state }
    newState[event.target.farmername] = event.target.value
    this.setState(newState)
  }
  getAllFarmers = () => {
    axios.get('/api/farmers').then(res => {
      this.setState({ farmers: res.data })
    })
  }
  componentDidMount() {
    this.getAllUsers()
    this.getAllFarmers()

  }
  render() {
    return (
      <div>
        <h1>Farmer Log In</h1>
        <form onSubmit={this.farmerId}>
          <label htmlFor="name">Farmer User Name</label>
          <input type="text" name="farmername"
            value={this.state.FarmerName}
            onChange={this.handleChange}
          />
          <label htmlFor="name">Password</label>
          <input type="text" name="farmerpassword"
            value={this.state.FarmerPassword}
            onChange={this.handleChange}
            onBlur={() => this.props.Farmer(this.props.farmer)}
          />
          <br />
          <Button waves='light' node='a' type="submit"> Submit </Button>
        </form>
        <br />

        <h1>User Log In</h1>


        <form onSubmit={this.userId}>
          <label htmlFor="name">User Name</label>
          <input type="text" name="username"
            value={this.state.UserName}
            onChange={this.handleChange}
          />
          <label htmlFor="name">Password</label>
          <input type="text" name="userpassword"
            value={this.state.UserPassword}
            onChange={this.handleChange}
            onBlur={() => this.props.updateUser(this.props.user)} />
          <br />
          <Button waves='light' node='a' type="submit"> Submit </Button>
        </form>



      </div>
    )
  }
}

export default LogIn