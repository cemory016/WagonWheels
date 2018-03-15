import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class FarmerView extends Component {
    state = {
        //changed from squgglie to square brackets
        farmer: [],
        redirect: false,
    };

    componentDidMount = () => {
        const farmerId = this.props.match.params.farmerId
        axios.get(`/api/farmer/${farmerId}`)
            .then((response) => {
                const farmer = response.data
                this.setState({ farmer })
                console.log(this.state.farmer)
            })
    }
    render() {
        return (
            <div>
                Hi I'm Farmer {this.state.farmer.farmerName}.
             <br />
                <h3>My Farm is called {this.state.farmer.farmName}</h3>
                <br />
                <h4>The farm is located in {this.state.farmer.farmLocation}</h4>
                <br />
                <h4>{this.state.farmer.farmerImg}</h4>
                <br />
                <h4>{this.state.farmer.products}</h4>
                <br />
                <Link to={`/farmer/${this.state.farmer._id}/edit`}>edit page</Link>
            </div>
        );
    }
}
export default FarmerView