import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { useData } from "../../context/DataContext";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { useFilter } from "../../context/FilterContext";
import { TYPE } from "../../util/constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { wishlist, cart } = useData();
  const { filtersApplied, filterDispatch } = useFilter();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(filtersApplied?.filterBySearch);
  }, [filtersApplied]);

  const searchInputChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const keyPressSearchHandler = (e) => {
    if(e.which === 13) {
      filterDispatch({ type: TYPE.FILTER_BY_SEARCH, payload: search });
      navigate("/books");
    }
  }

  const submitSearchHandler = () => {
    filterDispatch({ type: TYPE.FILTER_BY_SEARCH, payload: search });
    navigate("/books");
  }

  return (
    <div className="navbar">
      <NavLink className="navlink navbar_heading" to="/">
        <h1 className="navbar_heading logo">
          <AutoStoriesOutlinedIcon id='navbar_bucher_icon'/>
          Bücher
        </h1>
      </NavLink>
      <div className="navbar_action">
        <NavLink className="navlink wishlist" to="/books">
          <ExploreOutlinedIcon />
        </NavLink>
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
        <input type='text' placeholder='Search books...' className="search"
          value={search}
          onChange={searchInputChangeHandler}
          onKeyPress={keyPressSearchHandler}/>
          <SearchOutlinedIcon className='secondary-color cursor-pointer search-icon'
            onClick={submitSearchHandler}/>
      </div>
    </div>
  )
}

export default Navbar