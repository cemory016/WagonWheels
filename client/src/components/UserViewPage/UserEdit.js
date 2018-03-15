import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


class EditUser extends Component {
    state = {
        User: {},
    }
    // componentDidMount = () => {
    //     const userId = this.props.match.params.userId
    // }

    // updateUser = () => {
    //     axios.patch(`/api/user/${this.props.match.params}`, this.state.editUser)
    //         .then((response) => {
    //             this.setState({ editUser: response.data.editUser })
    //         })
    // }
    updateUser = (event) => {
        event.preventDefault()
        const userId = this.props.user._id
        console.log(userId)
        const payload = this.state.user
        axios.patch(`/api/user/${userId}`, payload).then(res => {
        this.setState({ user: res.data})
        })
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text'
                            name="UserName"
                            placeholder="Username"
                            onChange={this.props.user.username}
                        
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="email"
                            placeholder="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="Password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="Location"
                            placeholder="Location"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name="FamilySize"
                            placeholder="FamilySize"
                            onChange={this.handleChange}
                        />
                    </div>


                    <button type="submit">redirect to user
                    </button>

                </form>
            </div>
        );
    }
}

export default EditUser;