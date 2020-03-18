import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import adress from '../img/social/adress.svg'
import contact from '../img/social/contact.svg'


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
        <div className="has-background-black has-text-white" >
        <nav className=" container level ">
          <div className={` level-left`}>
            <span>
              <p className="level-item">
                Heures d'ouverture:<br/> Lundi - Vendredi : 06:00 - 16:00, Samedi - Fermé
              </p>
            </span>
          </div>
          <div className={`level-right`}>
            <p className="level-item ">
              <Link to="/contact" className=" has-text-white">Nous contacter ?</Link>
            </p>
          </div>
      </nav>
        </div>
      <div className="has-background-gray">
        <nav className="level navbar">
            <div className={`level-item has-text-centered ${this.state.navBarActiveClass}`}>
              
              <p className="level-item has-text-centered">
                <img src={logo} alt="logo" style={{ width: '25%', height: 'auto' }}/>
              </p>
              
            </div>
        </nav>
      </div>
      <div className="has-background-black" >
        <nav className="level">
            <div className={`container  level-item ${this.state.navBarActiveClass}`}>
              <p className="level-item has-text-centered">
                <Link to="/" className="navbar-item ">Acceuil</Link>
              </p>
              <p className="level-item has-text-centered">
                <Link to="/about" className="navbar-item">A propos</Link>
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
    </div>
    )
  }
}

export default Navbar