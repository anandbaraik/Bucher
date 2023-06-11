import React from 'react';
import "./Cart.css";
import { useData } from "../../context/DataContext";
import { NavLink } from 'react-router-dom';
import { getTotalDiscount, getTotalPrice } from '../../util/productsUtil';
import { CartBookCard } from '../../components/CartBookCard/CartBookCard';
import EmptyCartImg from "../../assets/shopping-cart.png"
import EmptyResult from '../../components/EmptyResult/EmptyResult';
const Cart = () => {
  const { cart } = useData();
  const totalDiscount = getTotalDiscount(cart);
  const totalPrice = getTotalPrice(cart);
  return (
    <div className="cart-page">
      <h1 className="cart-heading text-center">
        Cart ({cart?.length })
      </h1>
      {
      cart?.length === 0 ? (
        <EmptyResult
          img={EmptyCartImg}
          heading={'Your Cart is Empty!'}
          subheading={'Go ahead and explore exclusive products!'}
          button={{
            url: '/books',
            text: 'Shop now'
          }}/>
      ) : (
        <div className="cart-block">
          <div className="cart-block-items">
            <ul>
              {cart?.map((book) => (
                <CartBookCard book={book} key={book._id} />
              ))}
            </ul>
          </div>
          <div className="cart-block-price-details-wrapper">
            <div className="cart-block-price-details">
              <div className="cart-block-price-details-heading text-center">
                <h2>
                    Price Details
                    ({cart?.length} item{cart?.length > 1 && "s"})
                </h2>
              </div>
              <hr />
              <div className="cart-block-price-details-prices">
                <div>
                  <h3>Total Price</h3>
                  <h3 className="cart-block-rupee">{totalPrice}</h3>
                </div>
                <div>
                  <h3>Discount</h3>
                  <h3 className="cart-block-rupee">- {totalDiscount}</h3>
                </div>
              </div>
              <hr />
              <div className="cart-block-price-details-final">
                <div>
                  <h2>Subtotal</h2>
                  <h2 className="cart-block-rupee">
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