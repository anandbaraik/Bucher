import React from 'react'
import "./Hero.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
export const Hero = () => {
  return (
    <div className="home__hero">
        <div className='home__hero-info'>
            <NavLink to={'/books'} className='btn home__hero-cta'>
                Shop Now
                <ArrowForwardIosIcon/>
            </NavLink>
        </div>
    </div>
  )
}
