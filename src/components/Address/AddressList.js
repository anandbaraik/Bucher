import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../../context/DataContext";
import { TOAST_CONFIG, TYPE } from "../../util/constants";
import { toast } from "react-toastify";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import "./Address.css"
const AddressList = ({isAddressPage, addressSelected, setAddressSelected}) => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const { addresses, dataDispatch } = useData();

  const addressSelectHandler = (e) => {
    setAddressSelected(addresses.find(({ id }) => id === e.target.value));
  };

  const newAddressFormSubmitHandler = (address) => {
    dataDispatch({
      type: TYPE.ADD_ADDRESS,
      payload: { ...address, id: uuid() },
    });
    toast.success("New Address Added", TOAST_CONFIG);
  };

  const addressDeleteHandler = (addressId) => {
    dataDispatch({ type: TYPE.DELETE_ADDRESS, payload: addressId });
    toast.error("Deleted Address", TOAST_CONFIG);
  };

  const addressEditHandler = (address) => {
    dataDispatch({ type: TYPE.EDIT_ADDRESS, payload: address });
    toast.success("Updated Address", TOAST_CONFIG);
  };

  return (
    <div className="address-list">
      {addresses.length > 0 && !isAddressPage && (
        <h3>Choose a delivery Address</h3>
      )}
      {!isEditing &&
        addresses.map((address) => {
          return (
            <AddressCard
              key={address.id}
              address={address}
              isAddressPage={isAddressPage}
              addressSelected={addressSelected}
              addressSelectHandler={addressSelectHandler}
              setEditingAddress={setEditingAddress}
              setIsEditing={setIsEditing}
              addressDeleteHandler={addressDeleteHandler}
            />
          );
        })}
      {isEditing && (
        <AddressForm
          onFormEdit={addressEditHandler}
          setIsEditing={setIsEditing}
          editingAddress={editingAddress}
          editingForm
        />
      )}
      {!formDisplay && !isEditing && (
        <button
          className="add-new-address"
          onClick={() => setFormDisplay(true)}
        >
          Add New Address
        </button>
      )}
      {formDisplay && (
        <AddressForm
          setFormDisplay={setFormDisplay}
          onFormSubmit={newAddressFormSubmitHandler}
        />
      )}
    </div>
  );
};

export default AddressList;