import React from 'react';
import "./Cart.css";
import { useData } from "../../context/DataContext";
import { NavLink } from 'react-router-dom';
import { getTotalDiscount, getTotalPrice } from '../../util/productsUtil';
import { CartBookCard } from '../../components/CartBookCard/CartBookCard';
const Cart = () => {
  const { cart } = useData();
  const totalDiscount = getTotalDiscount(cart);
  const totalPrice = getTotalPrice(cart);
  return (
    <div className="cart_page">
      <h1 className="cart_heading text-center">
        Cart {cart?.length }
      </h1>
      {
      cart?.length === 0 ? (
        <div className="cart_empty text-center">
          <h2>Oops! Your cart is empty! </h2>
        </div>
      ) : (
        <div className="cart_block">
          <div className="cart_block_items">
            <ul>
              {cart?.map((book) => (
                <CartBookCard book={book} key={book._id} />
              ))}
            </ul>
          </div>
          <div className="cart_block_price_details_wrapper">
            <div className="cart_block_price_details">
              <div className="cart_block_price_details_heading">
                <h2>Price Details</h2>
                <h2>
                  ({cart?.length} item{cart?.length > 1 && "s"})
                </h2>
              </div>
              <hr />
              <div className="cart_block_price_details_prices">
                <div>
                  <h3>Total Price</h3>
                  <h3 className="cart_block_rupee">{totalPrice}</h3>
                </div>
                <div>
                  <h3>Discount</h3>
                  <h3 className="cart_block_rupee">- {totalDiscount}</h3>
                </div>
              </div>
              <hr />
              <div className="cart_block_price_details_final">
                <div>
                  <h2>Subtotal</h2>
                  <h2 className="cart_block_rupee">
                    {totalPrice - totalDiscount}
                  </h2>
                </div>
                <NavLink to="/checkout">
                  <button>
                    <h2>Checkout</h2>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart