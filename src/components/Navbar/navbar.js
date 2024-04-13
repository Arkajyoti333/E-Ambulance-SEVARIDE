import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import logo from '../../Assets/Sevaride.png'
const Navbar = () => {
  return (
    <nav className='navbar'>

      <a href='https://sasss.shop/'>
        <img src={logo} alt='logo' className='logo'/>
      </a>
      
      <div className="navMenu">
        <Link className="ListItem">Home</Link>
        <Link className="ListItem">Services</Link>
        <Link className="ListItem">About us</Link>
      </div>

      <div>
          <button className='login'>Log In</button>
      </div>

    </nav>
  )
};
export default Navbar;