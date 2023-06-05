import React from 'react';
import "./BookList.css";
import {useData} from "../../context/DataContext";
import { useFilter } from "../../context/FilterContext";
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import { getFilteredProducts } from "../../util/filterProducts";;
const BookList = () => {
  const { products } = useData();
  const { appliedFilters } = useFilter();
  const filteredProducts = products;
  return (
    <div className="product-section">
      <FilterSidebar />
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <h1>Product does not found...</h1>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        )}
      </div>
    </div>
  )
}

export default BookList