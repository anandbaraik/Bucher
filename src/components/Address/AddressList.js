import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../../context/DataContext";
import { TOAST_CONFIG, TYPE } from "../../util/constants";
import { toast } from "react-toastify";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import "./Address.css"
const AddressList = ({isAddressPage, selectedAddress, setSelectedAddress}) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableAddress, setEditableAddress] = useState(null);
  const { addresses, dataDispatch } = useData();

  const addressSelectHandler = (e) => {
    setSelectedAddress(addresses.find(({ id }) => id === e.target.value));
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
    toast.error("Address Deleted", TOAST_CONFIG);
  };

  const addressEditHandler = (address) => {
    dataDispatch({ type: TYPE.EDIT_ADDRESS, payload: address });
    toast.success("Address Updated", TOAST_CONFIG);
  };

  return (
    <div className="address-list">
      {addresses.length > 0 && !isAddressPage && (
        <h3>Choose a delivery address</h3>
      )}
      {!isEditing &&
        addresses.map((address) => {
          return (
            <AddressCard
              key={address.id}
              address={address}
              isAddressPage={isAddressPage}
              selectedAddress={selectedAddress}
              addressSelectHandler={addressSelectHandler}
              setEditableAddress={setEditableAddress}
              setIsEditing={setIsEditing}
              addressDeleteHandler={addressDeleteHandler}
            />
          );
        })}
      {isEditing && (
        <AddressForm
          onFormEdit={addressEditHandler}
          setIsEditing={setIsEditing}
          editableAddress={editableAddress}
          isEditingForm
        />
      )}
      {!isFormDisplayed && !isEditing && (
        <button
          className="add-new-address"
          onClick={() => setIsFormDisplayed(true)}
        >
          Add New Address
        </button>
      )}
      {isFormDisplayed && (
        <AddressForm
          setIsFormDisplayed={setIsFormDisplayed}
          onFormSubmit={newAddressFormSubmitHandler}
        />
      )}
    </div>
  );
};

export default AddressList;