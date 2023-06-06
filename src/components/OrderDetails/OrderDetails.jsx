import React from 'react'
import "./OrderDetails.css"
import { useData } from "../../context/DataContext";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TYPE, TOAST_CONFIG } from "../../util/constants";
import { useFilter } from "../../context/FilterContext";
import { removeFromCart } from "../../services/cartServices";
import { removeFromWishlist } from "../../services/wishlistServices";
import { getTotalDiscount, getTotalPrice } from '../../util/productsUtil';
const OrderDetails = ({addressSelected}) => {
    const { user, token } = useAuth();
    const { cart, dataDispatch } = useData();
    const { filterDispatch } = useFilter();
    const navigate = useNavigate();
    const discountedPrice = getTotalDiscount(cart);
    const totalPrice = getTotalPrice(cart);
  const placeOrderHandler = () => {
    if (!addressSelected) {
      toast.warn("Select an address to proceed");
    } else {
      displayRazorpay();
    }
  };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {

    if (addressSelected) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      const options = {
        key: "rzp_test_b2n4tgTnQgUZga",
        amount: (totalPrice - discountedPrice) * 100,
        currency: "INR",
        name: "Bucher",
        description: "Thank you for shopping with us",
        handler: function (response) {
          toast.success("Order Placed", TOAST_CONFIG);
          clearAll();
          navigate("/");
        },
        prefill: {
          name: `${JSON.parse(user)['firstName']}`,
          email: user?.email,
          contact: "8969531559",
        },
        theme: {
          color: "#007bb5",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  const clearAll = () => {
    dataDispatch({ type: TYPE.CLEAR_CART });
    filterDispatch({ type: TYPE.CLEAR_FILTERS });
    for (const item of cart) {
      removeFromCart(dataDispatch, item._id, token, () => {}, true);
    }
  };

  return (
    <div className="order-details-container">
      <h3 className='text-center'>Order Details</h3>
      <div className="flex-col">
        <div className="flex-row font-bold">
          <p>Items</p>
          <p>Qty</p>
        </div>
        <div className="flex-col gap-8">
          {cart?.map(({ _id, title, qty }) => {
            return (
              <div className="flex-row" key={_id}>
                <p>{title}</p>
                <p>{qty}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className='text-center' >Price Details</h3>
      <div className="price_details_container">
        <div className="flex-items-col gap-8">
          <div className="flex-row">
            <p>Total Price</p>
            <p>₹ {totalPrice}</p>
          </div>
          <div className="flex-row">
            <p>Total Discount</p>
            <p>₹ -{discountedPrice}</p>
          </div>
          <div className="flex-row">
            <p>
              <strong>
              Grand Amount
              </strong>
            </p>
            <p>
              <strong>
              ₹ {totalPrice - discountedPrice}
              </strong>
            </p>
          </div>
        </div>
      </div>
      <button className="place-order-btn" onClick={placeOrderHandler}>
        Place Order
      </button>
    </div>
  )
}

export default OrderDetails