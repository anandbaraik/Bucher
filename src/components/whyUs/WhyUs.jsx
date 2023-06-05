import React from 'react'
import "./WhyUs.css"
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
const whyUs = () => {
  return (
    <div className="why-choose-us">
        <div className="service">
        <div className="icon">
            <SyncAltOutlinedIcon fontSize={'inherit'}/>
        </div>

        <div className="text">
            <div className="title">Guarantee Return</div>
            <div className="sub-title">within 14 days of receiving your order</div>
        </div>
        </div>

        <div className="service">
        <div className="icon">
            <LocalShippingOutlinedIcon fontSize={'inherit'}/>
        </div>

        <div className="text">
            <div className="title">Fast Delivery</div>
            <div className="sub-title">Within 3-5 business days</div>
        </div>
        </div>

        <div className="service">
        <div className="icon">
            <PaymentOutlinedIcon fontSize={'inherit'}/>
        </div>

        <div className="text">
            <div className="title">Secure Payments</div>
            <div className="sub-title">All Cards Accepted</div>
        </div>
        </div>
    </div>
  )
}

export default whyUs