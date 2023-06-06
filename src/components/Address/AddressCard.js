import React from "react";
import "./Address.css"
const AddressCard = ({address, isAddressPage, addressSelected, addressSelectHandler, addressDeleteHandler, setEditingAddress, setIsEditing}) => {
  const { id, name, phone, city, state, pin, addressText } = address;
  return (
    <div className="address-card">
      {!isAddressPage && (
        <input
          type="radio"
          id={id}
          value={id}
          checked={addressSelected?.id === id}
          onChange={addressSelectHandler}
          className="choose-addr"
        />
      )}
      <label htmlFor={id} className="address-label">
        <div className="address-details">
          <h4>{name}</h4>
          <p>{addressText}</p>
          <p>
            {city}-{pin}
          </p>
          <p>{state}</p>
          <p>
            <b>Phone:</b> {phone}
          </p>
        </div>
        {isAddressPage && (
          <div className="address-manage-btn-group">
            <button
                className="btn addr_edit"
              onClick={() => {
                setEditingAddress(address);
                setIsEditing(true);
              }}
            >
              EDIT
            </button>
            <button className="btn addr_delete" onClick={() => addressDeleteHandler(id)}>DELETE</button>
          </div>
        )}
      </label>
    </div>
  );
};

export default AddressCard;