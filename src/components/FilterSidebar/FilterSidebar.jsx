import React, { useState } from "react";

import "./FilterSidebar.css";
import { useData } from "../../context/DataContext";
import { TYPE } from "../../util/constants";
import { useFilter } from "../../context/FilterContext";

const FilterSidebar = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { categories} = useData();
  const { appliedFilters, filterDispatch } = useFilter();
  const ratings = [4, 3, 2, 1];
  const handleFilter = (e, filterType) => {
    console.log(e.target.value, filterType);
    filterDispatch({ type: filterType, payload: e.target.value });
  };

  const handlerClearFilters = () => {
    filterDispatch({ type: TYPE.CLEAR_FILTERS });
  };

  return (
    <>
      <section
        className={showMobileFilters ? "mobile-filters-form" : "filters "}
      >
        <div className="filter-header">
          {showMobileFilters ? (
            <span
              className="filter-clear-button"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              APPLY
            </span>
          ) : (
            <span>FILTERS</span>
          )}
          <span
            className="filter-clear-button"
            onClick={handlerClearFilters}
          >
            CLEAR
          </span>
        </div>
        <hr />
        {/*--------------------------------- Sort By filters----------------------------------------- */}
        <div className="filter-sort-by">
          <span className="filter-heading">SORT BY</span>
          <div>
            <input
              type="radio"
              id="highToLow"
              name="priceSort"
              value="HIGH_TO_LOW"
              checked={appliedFilters?.sortByPrice === "HIGH_TO_LOW"}
              onChange={(e) => handleFilter(e, TYPE.SORT_BY_PRICE)}
            />
            <label htmlFor="highToLow">Price: High to Low</label>
          </div>

          <div>
            <input
              type="radio"
              id="lowToHigh"
              name="priceSort"
              value="LOW_TO_HIGH"
              checked={appliedFilters?.sortByPrice === "LOW_TO_HIGH"}
              onChange={(e) => handleFilter(e, TYPE.SORT_BY_PRICE)}
            />
            <label htmlFor="lowToHigh">Price: Low to High</label>
          </div>
        </div>
        <hr />
        {/*--------------------------------- Price Slider----------------------------------------- */}
        <div className="price-slider">
          <span className="filter-heading">Price</span>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={appliedFilters.filterByPriceRange}
            onChange={(e) => handleFilter(e, TYPE.FILTER_BY_PRICE_RANGE)}
          />
          <div className="filter-slider-label">
            <p className="text-secondary-color">100</p>
            <p className="text-secondary-color">{Math.ceil(1000 / 2)}</p>
            <p className="text-secondary-color">{'1000'}</p>
          </div>
        </div>

        <hr />
        {/*--------------------------------- Filter By Rating----------------------------------------- */}
        <div className="filter-by-rating">
          <span className="filter-heading">RATINGS</span>
          {ratings.map((rating, index) => {
            return (
              <div key={index}>
                <input
                  id={`rating_${rating}`}
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={rating === +appliedFilters.filterByRating}
                  onChange={(e) => handleFilter(e, TYPE.FILTER_BY_RATING)}
                />
                <label htmlFor={`rating_${rating}`}>{rating} ⭐️ and above</label>
              </div>
            );
          })}
        </div>
        <hr />
        {/*--------------------------------- Sort By Categories----------------------------------------- */}
        <div className="filter-by-categories">
          <span className="filter-heading">CATEGORIES</span>

          {categories.map(({ _id, categoryName, categoryTitle }) => {
            return (
              <div key={_id}>
                <input
                  type="checkbox"
                  name={categoryName}
                  id={categoryName}
                  value={categoryName}
                  checked={appliedFilters?.filterByCategories?.includes(categoryName)}
                  onChange={(e) => handleFilter(e, TYPE.FILTER_BY_CATEGORIES)}
                />
                <label htmlFor={categoryName}>{categoryName}</label>
              </div>
            );
          })}
        </div>
      </section>
      {/*--------------------------------- Mobile view filters----------------------------------------- */}

      <div className="mobile-filters">
        <div
          className="mobile-filter-header"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <img
            className="svg-icon"
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1684394768/E-comm%20ATTIREX/icons/filter-icon-512x430-exhzryxa_eoyxtk.png"
            alt=""
          />
          FILTERS
        </div>
        <div>
          <img
            className="svg-icon"
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1684394755/E-comm%20ATTIREX/icons/edit-clear-all-symbolic-icon-256x256-ivqmmjo2_j7vmgl.png"
            alt=""
          />
          <button
            className="filter-clear-button"
            onClick={handlerClearFilters}
          >
            CLEAR
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar ;