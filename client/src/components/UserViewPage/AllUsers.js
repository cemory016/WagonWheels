import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'



class AllUser extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="../Img/katy-belcher-387799-unsplash.jpg" />
                    <h2>Amber</h2>
                    <p>I like going to the Decatur Market because the farmers are so nice and I love getting to know about how things grow. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur magna non suscipit condimentum. Fusce nec tristique justo. Integer et venenatis nisi. Aliquam quis nulla velit. Phasellus vestibulum mauris ut malesuada accumsan. Pellentesque congue vel leo vitae sollicitudin. Nunc non tortor in enim viverra bibendum ut sit amet ipsum. Donec vitae orci at tortor pulvinar viverra a a ligula. Proin vehicula iaculis odio. Sed mi libero, lacinia quis congue at, faucibus id eros. Nulla vestibulum leo non eleifend semper. Aliquam lobortis dolor ac urna auctor luctus. Nulla ac dictum ipsum, quis commodo urna. Quisque scelerisque ut nisi ac commodo.</p>
                </div>
                <div>
                    <img src="../Img/tim-doerfler-591847-unsplash.jpg" />
                    <h2>Sal</h2>
                    <p>I like going to the Decatur Market because the farmers are so nice and I love getting to know about how things grow. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur magna non suscipit condimentum. Fusce nec tristique justo. Integer et venenatis nisi. Aliquam quis nulla velit. Phasellus vestibulum mauris ut malesuada accumsan. Pellentesque congue vel leo vitae sollicitudin. Nunc non tortor in enim viverra bibendum ut sit amet ipsum. Donec vitae orci at tortor pulvinar viverra a a ligula. Proin vehicula iaculis odio. Sed mi libero, lacinia quis congue at, faucibus id eros. Nulla vestibulum leo non eleifend semper. Aliquam lobortis dolor ac urna auctor luctus. Nulla ac dictum ipsum, quis commodo urna. Quisque scelerisque ut nisi ac commodo.</p>
                </div>
            </div>
        );
    }
}

export default AllUser;


