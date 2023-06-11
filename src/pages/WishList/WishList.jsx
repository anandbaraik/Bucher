import React from 'react';
import "./WishList.css";
import { useData } from "../../context/DataContext";
import ProductsCard from "../../components/ProductCard/ProductCard"
import WishListImg from "../../assets/wishlist.svg"
import EmptyResult from '../../components/EmptyResult/EmptyResult';
export const WishList = () => {
  const { wishlist } = useData();
  return (
    <div className="wishlist-page">
      <h2 className="wishlist-header">Wishlist ({wishlist.length})</h2>
      {wishlist.length === 0 ? (
        <EmptyResult
          img={WishListImg}
          heading={'Your Wishlist is Empty!'}
          subheading={'Explore exclusive products and add your favourites to Wishlist!'}
          button={{
            url: '/books',
            text: 'Shop now'
          }}
        />
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
