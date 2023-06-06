import React, { useEffect, useState } from "react";
import "./BookDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { addToCart } from "../../services/cartServices";
import {addToWishlist,removeFromWishlist} from "../../services/wishlistServices";
import {isProductInCart,isProductInWishlist} from "../../util/productsUtil";
import { getProduct } from "../../services/productDetailService";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
const BookDetails = () => {

  const {bookId:productId} = useParams();
  const [product, setProduct] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { token } = useAuth();
  const { dataDispatch, cart, wishlist, setLoader } = useData();
  const navigate = useNavigate();
  const isInCart = isProductInCart(cart, productId);
  const isInWishlilst = isProductInWishlist(wishlist, productId);

  useEffect(() => {
    getProduct(productId, setProduct, setLoader);
  }, [productId, setLoader]);

  const addToCartHandler = () => {
    if (token) {
      if (isInCart) {
        navigate("/cart");
      } else {
        addToCart(dataDispatch, product, token, setBtnDisabled);
      }
    } else {
      navigate("/signin");
    }
  };

  const addToWishlistHandler = () => {
    if (token) {
      if (isInWishlilst) {
        removeFromWishlist(dataDispatch, productId, token, setBtnDisabled);
      } else {
        addToWishlist(dataDispatch, product, token, setBtnDisabled);
      }
    } else {
      navigate("/signin");
    }
  };

  if (!product) {
    return (
      <div className="product-detail-page">
        <h2 className="text-center">Loading...</h2>
      </div>
    );
  }

  const {_id, author, title, description, inStock, coverImg, originalPrice, discountPrice, totalStars} = product;

  return (
    <div className="product">
        <div className="left">
          <div className="image">
            <img
              className="single-card-img"
              src={coverImg}
              alt={title}
            />
            {!inStock && (
              <span className="card-badge">Out of stock</span>
            )}
          </div>
        </div>
        <div className="right">
          <div className="product-detail-info-container">
            <h2>{title}</h2>
            <h4>
              <EditIcon/>
              {author}
              </h4>
            <div className="product-detail-rating">
              <p>{totalStars}</p>
              <StarOutlinedIcon className="product-detail-star-icon" />
            </div>
            <div className="price">
              <p className="product-card-price">₹{originalPrice - discountPrice}</p>
              <p className="product-detail-original-price">
                ₹{originalPrice}
              </p>
            </div>
          </div>
          <p className="product-detail-description">{description }</p>
          <p className="product-geners">
            {product?.genres.map((genre) => (
              <span className="prouct-gener">
                  <CategoryOutlinedIcon fontSize="small"/>
                  {genre}
              </span>
            )) }
          </p>
          <div className="product-detail-tag-msg">
            <span className="tag-msg">
              <LocalShippingIcon /> Fastest Delivery
            </span>
            <span className="tag-msg">
              <LocalOfferIcon /> Inclusive of All Taxes
            </span>
            <span className="tag-msg">
              <CheckCircleIcon /> Cash On Delivery Available
            </span>
          </div>
          <div className="product-btn-container">
            {isInCart ? (
              <button
                className="product-detail-add-to-cart-btn"
                onClick={addToCartHandler}
                disabled={btnDisabled}
              >
                <ShoppingCartCheckoutOutlinedIcon className="icon" />Go To Cart
              </button>
            ) : (
              <button
                className={`product-detail-add-to-cart-btn${
                  !inStock ? " add-to-cart-btn outofstock" : ""
                }`}
                onClick={addToCartHandler}
                disabled={!inStock}
              >
                {!inStock ? (
                  <>
                    <RemoveShoppingCartOutlinedIcon className="icon" /> Out of
                    Stock
                  </>
                ) : (
                  <>
                    <AddShoppingCartOutlinedIcon className="icon" /> Add To Cart
                  </>
                )}
              </button>
            )}

            {isInWishlilst ? (
              <button
                className="product-detail-add-to-whishlist-btn"
                onClick={addToWishlistHandler}
                disabled={btnDisabled}
              >
              <FavoriteOutlinedIcon color="error"/>  Remove from Wishlist
              </button>
            ) : (
              <button
                className="product-detail-add-to-whishlist-btn"
                onClick={addToWishlistHandler}
                disabled={btnDisabled}
              >
               <FavoriteBorderOutlinedIcon/> Add To Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
  )
}

export default BookDetails