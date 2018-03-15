import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'



class User extends Component {
  state = {
      user: {
      },
      redirect: false,
    };

    componentDidMount = () => {
      const userId = this.props.match.params.userId
      axios.get(`/api/user/${userId}`)
        .then((response) =>{
           const user = response.data
        this.setState({ user }) 
        console.log(this.state.user)
        })
        
    }

  render() {
      return (
          <div>
              Hi from UserProfile
               <br/>
              <h3>Name: {this.state.user.UserName}</h3>
              <br />
              <h4>Location: {this.state.user.UserLocation}</h4>
              <br />
              <h4>Family size: {this.state.user.UserFamilySize}</h4>
              <br />
              <h4>{this.state.user.UserEmail}</h4>

              <a href="/user/:userId/edit">edit page</a>
          </div>
      );
  }
}

export default User;


