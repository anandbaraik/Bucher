import React from 'react';
import "./Home.css";
import { Hero } from '../../components/Hero/Hero';
import { useData } from '../../context/DataContext';
import Category from '../../components/Category/Category';
import { Link } from "react-router-dom";
import WhyUs from "../../components/whyUs/WhyUs";
import { useFilter } from "../../context/FilterContext";
import { TYPE } from "../../util/constants";

const Home = () => {
  const {categories} = useData();
  const { filterDispatch } = useFilter();
  const categoryFilterHandler = ({ categoryName }) => {
    filterDispatch({ type: TYPE.CLEAR_FILTERS });
    filterDispatch({
      type: TYPE.ADD_CATEGORY_FILTER,
      payload: categoryName,
    });
  };
  return (
    <div className='home'>
        <Hero/>
        <WhyUs/>
        {
            (categories?.length > 0) && (
                <div className='category-container'>
                    <h1 className='category-header text-center'>
                        Browse Genres 🎗️
                    </h1>
                    <div className="category-body grid grid-three-col category-grid">
                        {
                            categories.map((category) => {
                            return (
                                <Link to="/books" key={category._id}
                                onClick={() => categoryFilterHandler(category)}>
                                    <Category category={category}/>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Home