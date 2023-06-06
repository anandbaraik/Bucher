import React from 'react'
import "./Checkout.css"
import { useState, useEffect } from "react";
import AddressList from "../../components/Address/AddressList";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
export const Checkout = () => {
    const { cart } = useData();
    const navigate = useNavigate();
    const [addressSelected, setAddressSelected] = useState(null);
    useEffect(() => {
        if (cart.length === 0) {
          navigate("/books");
        }
    }, [cart, navigate]);
  return (
    <div className="checkout-wrapper">
    <h1 className="text-center heading mb-2">Checkout</h1>
    <div className="checkout-container">
      <AddressList
        setAddressSelected={setAddressSelected}
        addressSelected={addressSelected}
      />
      <OrderDetails addressSelected={addressSelected} />
    </div>
  </div>
  )
}
