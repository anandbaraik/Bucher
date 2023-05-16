import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className='navlink navbar_heading'>
        <h1 className='navbar_heading'>
          AnandKart
        </h1>
      </Link>
      <div className='navbar_search'>
        <input/>
      </div>
      <div className='navbar_actions'>
      <Link to="/" className='navlink wishlist'>
        Wishlist
      </Link>
      <Link to="/" className='navlink wishlist'>
        Cart
      </Link>
      <Link to="/" className='navlink wishlist'>
        Profile
      </Link>
      </div>
    </div>
  )
}

export default Navbar