import React from 'react';
import "./Profile.css";
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const {user, setToken} = useAuth();
    const activeUser = JSON.parse(user);
    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        navigate("/signin");
    }
    return (
        <div className='text-center'>
            <h2>Profile</h2>
            <div>
                <p>
                    Name: {activeUser.firstName} {activeUser.lastName}
                </p>
                <p>Email: {activeUser.email} </p>
            </div>
            <button className="btn" onClick={logoutHandler}>
                Logout
            </button>
        </div>
    )
}

export default Profile