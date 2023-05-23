import React, { useEffect, useState } from 'react';
import "./SignUp.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useAuth } from '../../context/AuthContext';
import axios from "axios";
const SignUp = () => {

    const navigate = useNavigate();
    const {token, setUser, setToken} = useAuth();

    const [isVisible, setIsVisible] = useState({
        password: false,
        confirmPassword: false
    });

    const [isUserExist, setIsUserExist] = useState(false);
    const [signupInfo, setSignupInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:""
    });

    useEffect(() => {
        if (token) {
          navigate("/books");
        }
    }, [token, navigate]);

    const signUpHandler = async (e) => {
        e.preventDefault();
        try {
            const {data:{encodedToken, createdUser}} = await axios.post(`/api/auth/signup`, signupInfo);

            //store token & user in the local storage
            localStorage.setItem("token", encodedToken);
            localStorage.setItem("user", JSON.stringify(createdUser));

            setToken(encodedToken);
            setUser(JSON.stringify(createdUser));

            navigate("/");

        } catch (error) {
            if (error.response.status === 422) {
                setIsUserExist(true);
            }
        }

        setSignupInfo({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword:""
        });
    }

    return (
    <div className='signup signup_container'>
        <h1 className="signup-heading text-center">
            Sign up
        </h1>
        {isUserExist && <p className="auth-error text-center">User already exsists!</p>}
        <form onSubmit={signUpHandler} className="sign-up-form">
            <label>
                First name
                <input
                    id='first_name'
                    type="text"
                    name='first_name'
                    className="signup_input"
                    placeholder="Anand"
                    required
                    autoFocus={true}
                    value={signupInfo.firstName}
                    onChange={(e) => setSignupInfo((prev) => ({...prev, firstName:e.target.value}))}/>
            </label>
            <label>
                Last name
                <input
                    id='last_name'
                    type="text"
                    name='last_name'
                    className="signup_input"
                    required
                    placeholder="Baraik"
                    value={signupInfo.lastName}
                    onChange={(e) => setSignupInfo((prev) => ({...prev, lastName:e.target.value}))}
                    />
            </label>
            <label>
                Email
                <input
                    id='email'
                    type="email"
                    name='email'
                    required
                    className="signup_input"
                    placeholder="anand@live.com"
                    value={signupInfo.email}
                    onChange={(e) => setSignupInfo((prev) => ({...prev, email:e.target.value}))}/>
            </label>
            <label>
                Password
                <input
                    type={!isVisible.password ? 'password' : 'text'}
                    name='password'
                    className="signup_input"
                    placeholder="********"
                    required
                    value={signupInfo.password}
                    onChange={(e) => setSignupInfo((prev) => ({...prev, password:e.target.value}))}
                />
                <button type='button' className="signup__pwd-visibility-toggle-btn" onClick={() => setIsVisible((prev) => ({...prev, password:!isVisible.password}))}>
                    {!isVisible.password ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
            </label>
            <label>
                Confirm password
                <input
                    type={!isVisible.confirmPassword ? 'password' : 'text'}
                    name='password'
                    className="signup_input"
                    placeholder="********"
                    required
                    value={signupInfo.confirmPassword}
                    onChange={(e) => setSignupInfo((prev) => ({...prev, confirmPassword:e.target.value}))}
                />
                <button type='button' className="signup__pwd-visibility-toggle-btn" onClick={() => setIsVisible((prev) => ({...prev, confirmPassword:!isVisible.confirmPassword}))}>
                    {!isVisible.confirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
            </label>
            {
                (signupInfo.password.length > 0 && signupInfo.confirmPassword.length > 0 && signupInfo.password !== signupInfo.confirmPassword) && (
                    <p className="auth-error">
                        Password didn't match.
                    </p>
                )
            }
            <label className="signup_t_n_c cursor-pointer">
                <input type="checkbox" />
                I accept all terms & conditions
            </label>
            <button disabled={signupInfo.password !== signupInfo.confirmPassword} type="submit" className="signup_btn">
                Sign up
            </button>
        </form>
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