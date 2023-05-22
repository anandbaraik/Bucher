import React from 'react';
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const SignIn = () => {
    const login = true;
    const toggleLoginPassword = () => {

    }
  return (
    <div className='signin signin_container'>
        <h1 className="signin-heading text-center">
            Sign in
        </h1>
        <label>
            Email
            <input
                id='email'
                type="email"
                name='email'
                className="signin_input"
                placeholder="anand@live.com"
                autoFocus={true}/>
        </label>
        <label>
            Password
            <input
                type='password'
                name='password'
                className="signin_input"
                placeholder="********"
            />
            <button className="signin__pwd-visibility-toggle-btn" onClick={() => toggleLoginPassword()}>
                {login ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
        </label>
        <label className="signin_remember cursor-pointer">
            <input type="checkbox" />
            Remember Me
        </label>
        <button className="sign_btn signin_btn_user_cred">
            Sign in
        </button>
        <button className="sign_btn signin_btn_test_cred">
            Sign in with test credentials
        </button>
        <NavLink className="navlink" to="/signup">
            <button className="redirect_btn">
                <h3>Create a new account</h3>
                <ChevronRightIcon />
            </button>
        </NavLink>
    </div>
  )
}

export default SignIn