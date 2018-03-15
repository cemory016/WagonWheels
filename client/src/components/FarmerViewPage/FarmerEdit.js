import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


class EditFarmer extends Component {
    state = {
        Farmer: {},
    }
    componentDidMount = () => {
        const farmerId = this.props.match.params.farmerId
    }

    // updateUser = () => {
    //     axios.patch(`/api/user/${this.props.match.params}`, this.state.editUser)
    //         .then((response) => {
    //             this.setState({ editUser: response.data.editUser })
    //         })
    // }
    updateFarmer = (event) => {
        event.preventDefault()
        const farmerId = this.props.farmer._id
        console.log(farmerId)
        const payload = this.state.farmer
        axios.patch('/api/farmer/${farmerId}', payload).then(res => {
            this.setState({ farmerId: res.data })
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text'
                            name="FarmerName"
                            placeholder="FarmerName"
                            onChange={this.handleChange}
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
                        
                        
                    <button type="submit">Save Changes
                    </button>

                </form>
          </div>
                                    );
                                }
                            }
                            
export default EditFarmer;