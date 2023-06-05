import React from 'react'
import "./Category.css"
const Category = ({category}) => {
  const {categoryName, coverImg} = category;
  return (
    <div
        className="category-card">
        <img
            className="img-fluid category-img"
            src={coverImg}
            alt={categoryName}
        />
        <div className="category-title">
            {categoryName.toUpperCase()}
        </div>
    </div>
  )
}

export default Category