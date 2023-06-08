import React from 'react';
import "./ErrorPage.css";
import ErrorImg from "../../assets/404-error.svg"
import { Link } from 'react-router-dom';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
const ErrorPage = () => {
  return (
    <section className="page-404 m-auto">
        <div className='image-container'>
            <img src={ErrorImg} className="error-img" alt="Error image"/>
        </div>
        <div className="content-box-404 text-center">
            <h1 className="error-header text-center">
                The page you are looking for is not available!
            </h1>
            <p className='error-description text-center'>
                Go back to explore products
            </p>
            <div className='text-center action'>
                <Link to={'/books'} className='btn browse-product-btn'>
                    Browse Books
                    <ArrowOutwardOutlinedIcon/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default ErrorPage