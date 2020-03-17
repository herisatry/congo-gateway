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
      <div >
        <div className="has-background-black has-text-white">
        <nav className=" container level ">
          <div className={` level-left`}>
            <p className="level-item">
              Heures d'ouverture:<br/> Lundi - Vendredi : 06:00 - 16:00, Samedi - Fermé
            </p>
          </div>
          <div className={`level-right`}>
            <p className="level-item ">
              <Link to="/contact" className="navbar-item">Nous contacter ?</Link>
            </p>
          </div>
      </nav>
        </div>
      <nav className="level ">
          <div className={`level-item has-text-centered ${this.state.navBarActiveClass}`}>
            <p className="level-item has-text-centered">
              <Link to="/" className="navbar-item">Acceuil</Link>
            </p>
            <p className="level-item has-text-centered">
              <Link to="/about" className="navbar-item">A propos</Link>
            </p>
            <p className="level-item has-text-centered">
              <img src={logo} alt="logo" style={{ width: '14em', height: '10em' }}/>
            </p>
            <p className="level-item has-text-centered">
              <Link to="/blog" className="navbar-item">Blog</Link>
            </p>
            <p className="level-item has-text-centered">
              <Link to="/contact" className="navbar-item">Contact</Link>
            </p>
          </div>
      </nav>
    
    </div>
    )
  }
}

export default Navbar