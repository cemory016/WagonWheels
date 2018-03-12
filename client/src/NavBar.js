class NavBar extends Component {
    render () {
      return (
        <NavBarStyles>
          <h1>Idea Board</h1>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
          </ul>
        </NavBarStyles>
      )
    }
  }
  
  export default NavBar