import React, { useState, useEffect } from 'react';
import "./SignIn.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useAuth } from '../../context/AuthContext';
import { TOAST_CONFIG } from "../../util/constants";
import { toast } from "react-toastify";
import axios from "axios";

const SignIn = () => {

    const {token, setUser, setToken} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [signInCredential, setSignInCredential] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const location = useLocation();

    const toggleLoginPassword = () => {
        setIsPasswordVisible((isVisible) => !isVisible);
    }

    useEffect(() => {
        if (token) {
          navigate("/profile");
        }
    }, [token, navigate]);

    const signInHandler = async (e) => {
        e.preventDefault();
        try {
            const {data:{encodedToken, foundUser}} = await axios.post(`/api/auth/login`, signInCredential);

            //store token & user in the local storage
            localStorage.setItem("token", encodedToken);
            localStorage.setItem("user", JSON.stringify(foundUser));

            setToken(encodedToken);
            setUser(JSON.stringify(foundUser));

            if (location?.state?.from?.pathname) {
              navigate(location?.state?.from?.pathname);
            } else {
              navigate("/");
            }

            toast.success(`Logged in`, TOAST_CONFIG);

        } catch (error) {
            toast.error(`User ${error.response.statusText}`, TOAST_CONFIG);
        }

        setSignInCredential({
            email: "",
            password: "",
        });
    }

    const signInWithTestCredential = () => {
        setSignInCredential({
            email: "anandbaraik2014@gmail.com",
            password: "anandbaraik2014"
        });
    }

  return (
    <div className='signin signin_container'>
        <h1 className="signin-heading text-center">
            Sign in
        </h1>
        <form onSubmit={signInHandler} className="sign-in-form">
            <label>
                Email
                <input
                    id='email'
                    type="email"
                    name='email'
                    className="signin_input"
                    placeholder="anand@live.com"
                    required
                    value={signInCredential.email}
                    autoFocus={true}
                    onChange={(e) => setSignInCredential((prev) => ({...prev, email:e.target.value}))}/>
            </label>
            <label>
                Password
                <input
                    type={!isPasswordVisible ? 'password' : 'text'}
                    name='password'
                    className="signin_input"
                    placeholder="********"
                    value={signInCredential.password}
                    required
                    onChange={(e) => setSignInCredential((prev) => ({...prev, password:e.target.value}))}
                />
                <button type='button' className="signin__pwd-visibility-toggle-btn" onClick={() => toggleLoginPassword()}>
                    {!isPasswordVisible ? <VisibilityOffIcon className='cursor-pointer'/> : <VisibilityIcon className='cursor-pointer'/>}
                </button>
            </label>
            <label className="signin_remember cursor-pointer">
                <input type="checkbox" />
                Remember Me
            </label>
            <button type='submit' className="sign_btn signin_btn_user_cred">
                Sign in
            </button>
            <button type='button' className="sign_btn signin_btn_test_cred"
                onClick={signInWithTestCredential}>
                Set guest credentials
            </button>
        </form>
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