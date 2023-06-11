import "./CartBookCard.css";
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
  const {_id:productId, title, author, coverImg, originalPrice, qty, discountPrice} = book;

  const { wishlist, dataDispatch } = useData();
  const { token } = useAuth();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const isInWishlilst = isProductInWishlist(wishlist, productId);

  const removeFromCartHandler = (productId) => {
    removeFromCart(dataDispatch, productId, token, setIsBtnDisabled);
  };

  const addToWishlistHandler = (product) => {
    addToWishlist(dataDispatch, product, token, setIsBtnDisabled);
  };

  const removeFromWishlistHandler = () => {
    removeFromWishlist(dataDispatch, productId, token, setIsBtnDisabled);
  }

  const updateQtyInCartHandler = (productId, actionType, quantity) => {
    if (quantity === 1) {
      removeFromCart(dataDispatch, productId, token, setIsBtnDisabled);
    } else {
      updateQtyInCart(
        dataDispatch,
        productId,
        token,
        actionType,
        setIsBtnDisabled
      );
    }
  };

  return (
    <a data-href="!#" className="book-card-navlink">
      <li key={productId} className="book-card">
        <img src={coverImg} alt={title} />
        <div onClick={(e) => e.preventDefault()}>
          {isInWishlilst ? (
            <button disabled={isBtnDisabled}>
            <FavoriteOutlinedIcon
              className="wishlist-icon cursor-pointer text-danger"
              onClick={removeFromWishlistHandler}
            />
            </button>
          ) : (
            <button disabled={isBtnDisabled}>
            <FavoriteBorderOutlinedIcon
              className="wishlist-icon cursor-pointer"
              onClick={() => addToWishlistHandler(book)}
            />
            </button>
          )}
        </div>
        <div className="book-card-body">
          <h3 className="book-card-body-title">{title}</h3>
          <p className="book-card-body-author">{author}</p>
          <div className="book-card-body-price-container">
            <div className="book-card-body-price">
              <h2>₹ {originalPrice - discountPrice}</h2>
              <p>₹ {originalPrice}</p>
            </div>
          </div>
          <div className="book-card-qty-container">
            <div className="book-card-qty-body">
              <div className="book-card_qty">
                <button
                  className="cursor-pointer btn"
                  disabled={qty === 1 || isBtnDisabled}
                    onClick={() =>
                        updateQtyInCartHandler(productId, "DECREMENT", qty)
                    }
                >
                  <RemoveOutlinedIcon/>
                </button>
                <p>{qty}</p>
                <button
                  className="cursor-pointer btn"
                  disabled={isBtnDisabled}
                  onClick={() => updateQtyInCartHandler(productId, "INCREMENT")}
                >
                  <AddOutlinedIcon/>
                </button>
              </div>
              <button
                className="book-card-remove-btn cursor-pointer btn"
                onClick={() => removeFromCartHandler(productId)}
                disabled={isBtnDisabled}
              >
                <DeleteOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </li>{" "}
    </a>
  );
};