import React from 'react';
import "./BookList.css";
import {useData} from "../../context/DataContext";
import { useFilter } from "../../context/FilterContext";
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import { getFilteredProducts } from "../../util/filterProducts";
import ProductNotFoundImg from "../../assets/product_not_found.png"
import SearchingProductImg from "../../assets/searching.svg"
import EmptyResult from '../../components/EmptyResult/EmptyResult';
const BookList = () => {
  const { loader, products } = useData();
  const { filtersApplied } = useFilter();
  const filteredProducts = getFilteredProducts(products, filtersApplied);
  return (
    <div className="product-section">
      {
        loader ? (
          <>
            <FilterSidebar />
            <div className="product-list">
              <EmptyResult
                img={SearchingProductImg}
                heading={'Loading Products...'}
              />
            </div>
          </>
        ) : (
          <>
          <FilterSidebar />
          <div className="product-list">
            {filteredProducts?.length === 0 ? (
              <EmptyResult
                img={ProductNotFoundImg}
                heading={'No Products found...'}
              />
            ) : (
              filteredProducts?.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))
            )}
          </div>
          </>
        )
      }
    </div>
  )
}

export default BookList