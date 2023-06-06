import React, { useEffect, useState } from "react";
import "./Address.css"
const AddressForm = ({setFormDisplay, onFormSubmit, onFormEdit, setIsEditing, editingForm, editingAddress}) => {
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
    pin: "",
    addressText: "",
  });

  useEffect(() => {
    if (editingAddress) {
      setNewAddress(editingAddress);
    }
  }, [editingAddress]);

  const inputHandler = (e, inputName) => {
    setNewAddress((prev) => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const addressFormSubmitHandler = (e) => {
    e.preventDefault();

    if (editingForm) {
      onFormEdit(newAddress);
      setIsEditing(false);
    } else {
      onFormSubmit(newAddress);
      setFormDisplay(false);
    }
  };

  return (
    <div className="address-form-container">
      <h4>{editingForm ? "Edit Address" : "Add New Address"}</h4>
      <form onSubmit={addressFormSubmitHandler} className="address-form">
        <div>
          <input
            type="text"
            className="addr_input"
            id="username"
            value={newAddress.name}
            placeholder="Enter Name"
            onChange={(e) => inputHandler(e, "name")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="addr_input"
            id="addressText"
            placeholder="Enter Address"
            value={newAddress.addressText}
            onChange={(e) => inputHandler(e, "addressText")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="city"
            className="addr_input"
            value={newAddress.city}
            placeholder="Enter City"
            onChange={(e) => inputHandler(e, "city")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="state"
            className="addr_input"
            value={newAddress.state}
            placeholder="Enter State"
            onChange={(e) => inputHandler(e, "state")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="pin"
            className="addr_input"
            value={newAddress.pin}
            placeholder="Enter Pincode"
            onChange={(e) => inputHandler(e, "pin")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="phone"
            className="addr_input"
            value={newAddress.phone}
            placeholder="Enter Phone Number"
            onChange={(e) => inputHandler(e, "phone")}
            required
          />
        </div>
        <div className="address-form-btn-group">
          <button className="btn save_btn">SAVE</button>

          {!editingForm && (
            <button className="btn cancel_btn" type="button" onClick={() => setFormDisplay(false)}>
              CANCEL
            </button>
          )}
          {editingForm && (
            <button className="btn cancel_btn" type="button" onClick={() => setIsEditing(false)}>
              CANCEL
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddressForm;