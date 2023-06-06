import React from "react";
import AddressList from "../../components/Address/AddressList";
import "./Address.css";
const Address = () => {
  return (
    <div className="address-container">
    <div className="text-center">
      <h1>
      Address
      </h1>
    </div>
    <div className="address-wrapper">
      <AddressList isAddressPage />
    </div>
    </div>
  );
};

export default Address;