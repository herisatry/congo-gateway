import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="level">
  <div className={`level-item has-text-centered ${this.state.navBarActiveClass}`}>
  <p className="level-item has-text-centered">
    <Link to="/" className="navbar-item">Acceuil</Link>
  </p>
  <p className="level-item has-text-centered">
  <Link to="/" className="navbar-item">A propos</Link>
  </p>
  <p className="level-item has-text-centered">
    <img src={logo} alt="logo" style={{height:100}}/>
  </p>
  <p className="level-item has-text-centered">
  <Link to="/" className="navbar-item">Blog</Link>
  </p>
  <p className="level-item has-text-centered">
  <Link to="/" className="navbar-item">Contact</Link>
  </p>
  </div>
</nav>
    )
  }
}

export default Navbar