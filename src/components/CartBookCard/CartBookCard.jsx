import "./CartBookCard.css";
import { NavLink } from "react-router-dom";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import React, { useState } from "react";
import { isProductInWishlist } from "../../util/productsUtil";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { removeFromCart, updateQtyInCart } from "../../services/cartServices";
import { addToWishlist, removeFromWishlist } from "../../services/wishlistServices";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
export const CartBookCard = ({ book }) => {
  const {_id:productId, id, title, author, description, bookType, inStock, genres, coverImg, offers, originalPrice, qty, discountPercent, discountPrice, totalRatings, totalStars, __v, createdAt, updatedAt} = book;

  const { wishlist, dataDispatch } = useData();
  const { token } = useAuth();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const isInWishlilst = isProductInWishlist(wishlist, productId);

  const removeFromCartHandler = (productId) => {
    removeFromCart(dataDispatch, productId, token, setBtnDisabled);
  };

  const addToWishlistHandler = (product) => {
    addToWishlist(dataDispatch, product, token, setBtnDisabled);
  };

  const removeFromWishlistHandler = () => {
    removeFromWishlist(dataDispatch, productId, token, setBtnDisabled);
  }

  const updateQtyInCartHandler = (productId, actionType, quantity) => {
    if (quantity === 1) {
      removeFromCart(dataDispatch, productId, token, setBtnDisabled);
    } else {
      updateQtyInCart(
        dataDispatch,
        productId,
        token,
        actionType,
        setBtnDisabled
      );
    }
  };

  return (
    <a data-href="!#" className="cart_book_card_navlink">
      <li key={productId} className="cart_book_card">
        <img src={coverImg} alt={title} />
        <div onClick={(e) => e.preventDefault()}>
          {isInWishlilst ? (
            <FavoriteOutlinedIcon
              className="wishlist_icon"
              onClick={removeFromWishlistHandler}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              className="wishlist_icon"
              onClick={() => addToWishlistHandler(book)}
            />
          )}
        </div>
        <div className="cart_book_card_content">
          <h3 className="cart_book_card_content_title">{title}</h3>
          <p className="cart_book_card_content_author">{author}</p>
          <div className="cart_book_card_content_price_wrapper">
            <div className="cart_book_card_content_price">
              <h2>₹ {originalPrice - discountPrice}</h2>
              <p>₹ {originalPrice}</p>
            </div>
          </div>
          <div className="cart_book_card_qty_remove">
            <div className="cart_book_card_qty_wrapper">
              <div className="cart_book_card_qty">
                <button
                  disabled={qty === 1 || btnDisabled}
                    onClick={() =>
                        updateQtyInCartHandler(productId, "DECREMENT", qty)
                    }
                >
                  <RemoveOutlinedIcon/>
                </button>
                <p>{qty}</p>
                <button
                  disabled={btnDisabled}
                  onClick={() => updateQtyInCartHandler(productId, "INCREMENT")}
                >
                  <AddOutlinedIcon/>
                </button>
              </div>
              <div
                className="cart_book_card_qty_remove_btn"
                onClick={() => removeFromCartHandler(productId)}
                disabled={btnDisabled}
              >
                <DeleteOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </li>{" "}
    </a>
  );
};