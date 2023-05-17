import React from 'react'
import "./Footer.css";
import { NavLink } from "react-router-dom";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-company">
        <h1 className='text-center'>
        <AutoStoriesOutlinedIcon id='footer_bucher_icon'/>
          Bücher
        </h1>
        <p className='text-center'>Because there is no friend as loyal as a book.!</p>
        <p className='text-center'>&#169; 2023 Bücher</p>
      </div>
      <div className="footer-connect">
        <h2>Connect with me</h2>
        <p>Interested to collaborate? Feel free to connect over <span>👇🏼</span></p>
        <div className="footer-connect-links">
          <NavLink
            className="navlink"
            to="https://anandbaraik.github.io"
            target="_blank"
          >
            <LanguageOutlinedIcon />
          </NavLink>
          <NavLink
            className="navlink"
            to="https://twitter.com/baraik_anand"
            target="_blank"
          >
            <TwitterIcon />
          </NavLink>
          <NavLink
            className="navlink"
            to="https://github.com/anandbaraik"
            target="_blank"
          >
            <GitHubIcon />
          </NavLink>
          <NavLink
            className="navlink"
            to="https://www.linkedin.com/in/anandbaraik/"
            target="_blank"
          >
            <LinkedInIcon />
          </NavLink>
        </div>
      </div>
      <div className="footer-quick-links">
        <h2 className='text-center'>Quick links</h2>
        <div className="footer-quick-links-list">
            <NavLink className="navlink" to="/signup">
              Sign Up
            </NavLink>
            <NavLink className="navlink" to="/books">
              Books
            </NavLink>
            <NavLink className="navlink" to="/wishlist">
              Wishlist
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer