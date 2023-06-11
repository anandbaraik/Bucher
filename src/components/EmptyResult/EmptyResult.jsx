import React from 'react'
import "./EmptyResult.css"
import { Link } from 'react-router-dom'
const EmptyResult = ({img, heading, subheading, button}) => {
  return (
    <div className='empty-result-container'>
        <img src={img} alt="img" className='empty-img'/>
        <h1 >
            {heading}
        </h1>
        <p>
            {subheading}
        </p>
        {
            button && (
                <Link to={button?.url} className='btn redirect-btn'>
                    {button?.text}
                </Link>
            )
        }
    </div>
  )
}

export default EmptyResult