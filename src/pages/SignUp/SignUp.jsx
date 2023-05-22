import React from 'react';
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const SignUp = () => {
  const login = true;
    const toggleLoginPassword = () => {

    }
  return (
    <div className='signup signup_container'>
        <h1 className="signup-heading text-center">
            Sign up
        </h1>
        <label>
            First name
            <input
                id='first_name'
                type="text"
                name='first_name'
                className="signup_input"
                placeholder="Anand"
                autoFocus={true}/>
        </label>
        <label>
            Last name
            <input
                id='last_name'
                type="text"
                name='last_name'
                className="signup_input"
                placeholder="Baraik"
                />
        </label>
        <label>
            Email
            <input
                id='email'
                type="email"
                name='email'
                className="signup_input"
                placeholder="anand@live.com"/>
        </label>
        <label>
            Password
            <input
                type='password'
                name='password'
                className="signup_input"
                placeholder="********"
            />
            <button className="signup__pwd-visibility-toggle-btn" onClick={() => toggleLoginPassword()}>
                {login ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
        </label>
        <label>
            Confirm password
            <input
                type='password'
                name='password'
                className="signup_input"
                placeholder="********"
            />
            <button className="signup__pwd-visibility-toggle-btn" onClick={() => toggleLoginPassword()}>
                {login ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
        </label>
        <label className="signup_t_n_c cursor-pointer">
            <input type="checkbox" />
            I accept terms and conditions
        </label>
        <button className="signup_btn">
            Sign up
        </button>
        <NavLink className="navlink" to="/signin">
            <button className="redirect_btn">
                <h3>Already have an account? Login</h3>
                <ChevronRightIcon />
            </button>
        </NavLink>
    </div>
  )
}

export default SignUp;