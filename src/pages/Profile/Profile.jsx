import React from 'react';
import "./Profile.css";
import { useAuth } from '../../context/AuthContext';
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useFilter } from "../../context/FilterContext";
import { logoutUser } from "../../services/authServices";

const Profile = () => {

    const { user, setToken, setUser } = useAuth();
    const { dataDispatch, setLoader } = useData();
    const { filterDispatch } = useFilter();
    const activeUser = JSON.parse(user);
    const logoutHandler = () => {
        logoutUser(setToken, setUser, dataDispatch, filterDispatch, setLoader);
    };

    return (
    <div className="account-page">
      <div className="account-container">
        <h2>Account</h2>
        <div className="account">
          <div className="account-details">
            <div className="account-details-header">
              <h3>User Profile</h3>
              <Link to="/address">
                <button className="manage_addr btn">Manage Addresses</button>
              </Link>
            </div>
            <div className="account-info">
              <p>
                Name: {activeUser.firstName} {activeUser.lastName}
              </p>
              <p>Email: {activeUser.email} </p>
            </div>
          </div>
          <button className="btn logout-btn" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </div>
    )
}

export default Profile