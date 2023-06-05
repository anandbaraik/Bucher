import React, { useState } from "react";

import "./FilterSidebar.css";
import { useFilter } from "../../context/FilterContext";
// import {
//   CLEAR_FILTERS,
//   FILTER_BY_CATEGORY,
//   FILTER_BY_SECTION,
//   SORT_BY_RATING,
//   SORT_PRODUCTS,
//   UPDATE_PRICE_RANGE,
// } from "utils";

const FilterSidebar = () => {
  // const { state, dispatch } = useFilter();
  // const { selectedSections, selectedCategory, sortByPrice } = state;
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // const maxValue = state.products.reduce(
  //   (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
  //   0
  // );
  // // Action dispatcher functions
  // const handleSortProducts = (sortingString) => {
  //   dispatch({ type: SORT_PRODUCTS, payload: sortingString });
  // };
  // const handleSortByRating = (rating) => {
  //   dispatch({ type: SORT_BY_RATING, payload: rating });
  // };

  // const handleSectionToggle = (section) => {
  //   dispatch({ type: FILTER_BY_SECTION, payload: section });
  // };

  // const handleCategoryFilter = (category) => {
  //   dispatch({ type: FILTER_BY_CATEGORY, payload: category });
  // };

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
            onClick={() => {}}
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
              value="highToLow"
              // checked={sortByPrice === "highToLow"}
              onChange={() => {}}
            />
            <label htmlFor="highToLow">Price: High to Low</label>
          </div>

          <div>
            <input
              type="radio"
              id="lowToHigh"
              name="priceSort"
              value="lowToHigh"
              // checked={sortByPrice === "lowToHigh"}
              onChange={() => {}}
            />
            <label htmlFor="lowToHigh">Price: Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              id="aToz"
              name="priceSort"
              value="aToz"
              // checked={sortByPrice === "aToz"}
              onChange={() => {}}
            />
            <label htmlFor="aToz">Category: A to Z</label>
          </div>
          <div>
            <input
              type="radio"
              id="zToa"
              name="priceSort"
              value="zToa"
              // checked={sortByPrice === "zToa"}
              onChange={() => {}}
            />
            <label htmlFor="zToa">Category: Z to A</label>
          </div>
        </div>
        <hr />
        {/*--------------------------------- Price Slider----------------------------------------- */}
        <div className="price-slider">
          <span className="filter-heading">SLIDER</span>
          <input
            type="range"
            min="0"
            // max={maxValue}
            // value={state.priceRange.max}
            onChange={(e) => {}}
          />
          <div className="filter-slider-label">
            <p className="text-secondary-color">0</p>
            <p className="text-secondary-color">{Math.ceil(100 / 2)}</p>
            <p className="text-secondary-color">{'100'}</p>
          </div>
        </div>

        <hr />
        {/*--------------------------------- Filter By Rating----------------------------------------- */}
        <div className="filter-by-rating">
          <span className="filter-heading">RATINGS</span>
          <div>
            <input
              id="4stars"
              type="checkbox"
              name="4stars"
              value="4stars"
              // checked={state.sortByRating === "4stars"}
              onChange={() => {}}
            />
            <label htmlFor="4stars">4 ⭐️ and above</label>
          </div>
          <div>
            <input
              id="3stars"
              type="checkbox"
              name="3stars"
              value="3stars"
              // checked={state.sortByRating === "3stars"}
              onChange={() => {}}
            />
            <label htmlFor="3stars">3 ⭐️ and above</label>
          </div>
          <div>
            <input
              id="2stars"
              type="checkbox"
              name="2stars"
              value="2stars"
              // checked={state.sortByRating === "2stars"}
              onChange={() => {}}
            />
            <label htmlFor="2stars">2 ⭐️ and above</label>
          </div>
          <div>
            <input
              id="1stars"
              type="checkbox"
              name="1star"
              value="1star"
              // checked={state.sortByRating === "1stars"}
              onChange={() => {}}
            />
            <label htmlFor="1stars">1 ⭐️ and above</label>
          </div>
        </div>
        <hr />
        {/*--------------------------------- Sort By Section----------------------------------------- */}
        <div className="filter-by-section">
          <span className="filter-heading">SECTION</span>
          <div>
            <input
              id="Womens"
              type="checkbox"
              name="Womens"
              value="Womens"
              // checked={selectedSections.includes("Womens")}
              onChange={() => {}}
            />
            <label htmlFor="Womens"> Women's</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Mens"
              name="Mens"
              value="Mens"
              // checked={selectedSections.includes("Mens")}
              onChange={() => {}}
            />
            <label htmlFor="Mens"> Men's</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Kids"
              name="Kids"
              value="Kids"
              // checked={selectedSections.includes("Kids")}
              onChange={() => {}}
            />
            <label htmlFor="Kids"> Kid's</label>
          </div>
        </div>
        <hr />
        {/*--------------------------------- Sort By Categories----------------------------------------- */}
        <div className="filter-by-categories">
          <span className="filter-heading">CATEGORIES</span>
          <div>
            <input
              type="checkbox"
              id="activeWear"
              name="activeWear"
              value="activeWear"
              // checked={selectedCategory.includes("Active Wear")}
              onChange={() => {}}
            />
            <label htmlFor="activeWear">Active Wear</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dresses"
              name="dresses"
              value="dresses"
              // checked={selectedCategory.includes("Dresses")}
              onChange={() => {}}
            />
            <label htmlFor="dresses">Dresses</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="tops"
              name="tops"
              value="tops"
              // checked={selectedCategory.includes("Tops")}
              onChange={() => {}}
            />
            <label htmlFor="tops">Tops</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="officeWear"
              name="officeWear"
              value="officeWear"
              // checked={selectedCategory.includes("Office Wear")}
              onChange={() => {}}
            />
            <label htmlFor="officeWear">Office Wear</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="casual"
              name="casual"
              value="casual"
              // checked={selectedCategory.includes("Casual")}
              onChange={() => {}}
            />
            <label htmlFor="casual">Casual</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="freestyle"
              name="freestyle"
              value="freestyle"
              // checked={selectedCategory.includes("Freestyle")}
              onChange={() => {}}
            />
            <label htmlFor="freestyle">Freestyle</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="formal"
              name="formal"
              value="formal"
              // checked={selectedCategory.includes("Formal")}
              onChange={() => {}}
            />
            <label htmlFor="formal">Men's Formal</label>
          </div>
        </div>
      </section>
      {/*--------------------------------- Mobile view filters----------------------------------------- */}

      <div class="mobile-filters">
        <div
          class="mobile-filter-header"
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
            onClick={() => {}}
          >
            CLEAR
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar ;