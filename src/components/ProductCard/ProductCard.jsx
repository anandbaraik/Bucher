import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProductCard.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { addToCart } from "../../services/cartServices";
import {addToWishlist, removeFromWishlist } from "../../services/wishlistServices";
import { isProductInCart, isProductInWishlist } from "../../util/productsUtil";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {_id:productId, author, title, description, inStock, coverImg, originalPrice, discountPrice, totalStars} = product;
  const { token } = useAuth();
  const { dataDispatch, cart, wishlist } = useData();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const isInCart = isProductInCart(cart, productId);
  const isInWishlilst = isProductInWishlist(wishlist, productId);

  const addToCartHandler = (e) => {
    e.stopPropagation();
    if (token) {
      if (isInCart) {
        navigate("/cart");
      } else {
        addToCart(dataDispatch, product, token, setBtnDisabled);
      }
    } else {
      navigate("/signin", { state: { from: location } });
    }
  };

  const addToWishlistHandler = (e) => {
    e.stopPropagation();
    if (token) {
      if (isInWishlilst) {
        removeFromWishlist(dataDispatch, productId, token, setBtnDisabled);
      } else {
        addToWishlist(dataDispatch, product, token, setBtnDisabled);
      }
    } else {
      navigate("/signin", { state: { from: location } });
    }
  };

  return (
      <div
        className="product-card"
        onClick={() => navigate(`/books/${product._id}/${product?.title.split(" ").join('-')}`)}
      >
        <img src={coverImg} alt={title} />
        <button
          className={`whishlist-heart ${isInWishlilst ? "favorite" : ""}`}
          onClick={addToWishlistHandler}
          disabled={btnDisabled}
        >
          {isInWishlilst ? (
            <FavoriteOutlinedIcon color="error" />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </button>
        <div className="product-card-info">
          <div className="product-card-header">
            <h3 className="product-card-title" title={title}>
              {title}
            </h3>
            <div className="product-card-star">
              <p>{totalStars}</p>
              <StarOutlinedIcon color="warning" className="star-icon" />
            </div>
          </div>
          <h4 className="product-card-author">{author}</h4>
          <div className="product-card-price">
            <p className="product-card-discounted-price">₹{originalPrice - discountPrice}</p>
            <p className="product-original-price">₹{originalPrice}</p>
          </div>
          <div className="product-card-actions">
            {isInCart ? (
              <button
                className="add-to-cart-btn"
                onClick={addToCartHandler}
                disabled={btnDisabled}
              >
                <ShoppingCartCheckoutOutlinedIcon className="icon" />
                Go To Cart
              </button>
             ) : (
              <>
                {!inStock ? (
                  <button className="add-to-cart-btn outofstock" disabled>
                    <RemoveShoppingCartOutlinedIcon className="icon" />
                    Out of Stock
                  </button>
                 ) : (
                  <button className="add-to-cart-btn" onClick={addToCartHandler}
                    disabled={btnDisabled}>
                    <AddShoppingCartOutlinedIcon className="icon" />
                    Add To Cart
                  </button>
                 )}
               </>
            )}
          </div>
        </div>
      </div>
  );
};

export default ProductCard;