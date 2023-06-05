import React from 'react';
import "./Home.css";
import { Hero } from '../../components/Hero/Hero';
import { useData } from '../../context/DataContext';
import Category from '../../components/Category/Category';
import { Link } from "react-router-dom";
import WhyUs from "../../components/whyUs/WhyUs";
const Home = () => {
  const {categories} = useData();
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
                                onClick={() => {}}>
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