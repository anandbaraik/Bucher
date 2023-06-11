import React, { useState } from "react";

import "./FilterSidebar.css";
import { useData } from "../../context/DataContext";
import { TYPE } from "../../util/constants";
import { useFilter } from "../../context/FilterContext";

const FilterSidebar = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { categories} = useData();
  const { filtersApplied, filterDispatch } = useFilter();
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
        <div className="price-slider">
          <span className="filter-heading">Price</span>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={filtersApplied.filterByPriceRange}
            onChange={(e) => handleFilter(e, TYPE.FILTER_BY_PRICE_RANGE)}
          />
          <div className="filter-slider-label">
            <p className="text-secondary-color">100</p>
            <p className="text-secondary-color">{Math.ceil(1000 / 2)}</p>
            <p className="text-secondary-color">{'1000'}</p>
          </div>
        </div>
        <hr />
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
                  checked={rating === +filtersApplied.filterByRating}
                  onChange={(e) => handleFilter(e, TYPE.FILTER_BY_RATING)}
                />
                <label htmlFor={`rating_${rating}`}>{rating} ⭐️ and above</label>
              </div>
            );
          })}
        </div>
        <hr />
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
                  checked={filtersApplied?.filterByCategories?.includes(categoryName)}
                  onChange={(e) => handleFilter(e, TYPE.FILTER_BY_CATEGORIES)}
                />
                <label htmlFor={categoryName}>{categoryName}</label>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="filter-sort-by">
          <span className="filter-heading">SORT BY</span>
          <div>
            <input
              type="radio"
              id="highToLow"
              name="priceSort"
              value="HIGH_TO_LOW"
              checked={filtersApplied?.sortByPrice === "HIGH_TO_LOW"}
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
              checked={filtersApplied?.sortByPrice === "LOW_TO_HIGH"}
              onChange={(e) => handleFilter(e, TYPE.SORT_BY_PRICE)}
            />
            <label htmlFor="lowToHigh">Price: Low to High</label>
          </div>
        </div>
      </section>
      <div className="mobile-filters">
        <div
          className="mobile-filter-header"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <img
            className="svg-icon"
            src="https://github.com/anandbaraik/Bucher/assets/31516195/b5b26409-dc5d-4b50-8a27-54f1f0a007b6"
            alt="open filter"
          />
          FILTERS
        </div>
        <div>
          <img
            className="svg-icon"
            src="https://github.com/anandbaraik/Bucher/assets/31516195/0124ef5a-5688-453b-b88b-0912ad063c46"
            alt="clear"
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