import React from 'react';
import "./WishList.css";
import { useData } from "../../context/DataContext";
import ProductsCard from "../../components/ProductCard/ProductCard"
export const WishList = () => {
  const { wishlist } = useData();
  return (
    <div className="wishlist-page">
      <h2 className="wishlist-header">Wishlist ({wishlist.length})</h2>
      {wishlist.length === 0 ? (
        <p className="wishlist-empty">No Items in Wishlist!</p>
      ) : (
        <div className="wishlist-container">
          {wishlist?.map((product) => {
            return <ProductsCard product={product} key={product._id} />;
          })}
        </div>
      )}
    </div>
  )
}
