import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserViewPage extends Component {
  render () {
    return (
      <div>
        <h1>User View Page</h1>
        <p>welcolme {this.props.user}</p>
      </div>
    )
  }
}

export default UserViewPage