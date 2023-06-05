import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { useData } from "../../context/DataContext";
const Navbar = () => {
  const { wishlist, cart } = useData();
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
          {wishlist?.length > 0 && (
              <span className='badge'>{wishlist.length}</span>
          )}
        </NavLink>
        <NavLink className="navlink cart" to="/cart">
          <LocalMallOutlinedIcon />
          {cart?.length > 0 && (
              <span className='badge'>{cart.length}</span>
          )}
        </NavLink>
        <NavLink className="navlink user" to="/profile">
          <AccountCircleOutlinedIcon />
        </NavLink>
      </div>
      <div className="navbar_search">
      <SearchOutlinedIcon className='secondary-color'/>
        <input type='search' placeholder='Search books...' className="search"/>
      </div>
    </div>
  )
}

export default Navbar