import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { initializeConfetti } from '../../util/confetti';
import "./OrderHistory.css";
const OrderHistory = () => {
    const navigate = useNavigate();
    useEffect(() => {
        initializeConfetti();
        const timerId = setTimeout(() => {
            navigate("/");
        }, 6000);
        return () => clearTimeout(timerId);
    }, []);
  return (
    <div className="order-history">
        <h1>Your order has been placed!</h1>
    </div>
  )
}

export default OrderHistory