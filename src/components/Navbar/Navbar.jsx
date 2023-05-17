import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="navlink navbar_heading" to="/">
        <h1 className="navbar_heading logo">
          <AutoStoriesOutlinedIcon id='navbar_bucher_icon'/>
          Bücher
        </h1>
      </NavLink>
      <div className="navbar_action">
        <NavLink className="navlink wishlist" to="/wishlist">
          <FavoriteBorderOutlinedIcon />
          <span className='badge'>0</span>
        </NavLink>
        <NavLink className="navlink cart" to="/cart">
          <LocalMallOutlinedIcon />
          <span className='badge'>0</span>
        </NavLink>
        <NavLink className="navlink user" to="/profile">
          <AccountCircleOutlinedIcon />
        </NavLink>
      </div>
      <div className="navbar_search">
        <input placeholder='Search books...' className="search"/>
        <SearchOutlinedIcon className='secondary-color'/>
      </div>
    </div>
  )
}

export default Navbar