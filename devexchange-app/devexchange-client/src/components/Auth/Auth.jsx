import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';

import logo from '../../assets/logo192.png'

import './Auth.css'

import AboutAuth from "./AboutAuth";

import { signUp, logIn } from "../../actions/auth";

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSwitch = () => {
        setIsSignUp(!isSignUp);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password){
            alert("Enter Email and Password");
        }

        if(isSignUp){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signUp({name, email, password}, navigate))
        }
        else{
            dispatch(logIn({email, password}, navigate))
        }


    }

    return (
        <section className="auth-section">
            {isSignUp && <AboutAuth/>}
            <div className="auth-container">
                { !isSignUp && <img src={logo} alt="devexchange" className="login-logo"/> }
                <form onSubmit={handleSubmit}>
                    {
                        isSignUp && (
                            <label htmlFor="name">
                                <h4> User Name</h4>
                                <input type="text" id="name" name="name" onChange={(e)=> {setName(e.target.value)}}/>
                            </label>
                        )
                    }

                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor="password">
                      <div style={{display:'flex', justifyContent:'space-between'}}>
                        <h4>password</h4>
                        {!isSignUp && <h4 className="special-text">Forgot password?</h4>}
                      </div>
                        <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>

                        {isSignUp && <p className="text-item">
                                Passwords must contain atleast 8 characters, including one letter and one digit
                            </p>}
                    </label>

                    {
                        isSignUp && (
                            <label htmlFor="check">
                                <input type="checkbox" id="check" className="check-box"/>
                                <p className="text-item">
                                    Opt in to recieve occassional, <br /> promotional and product information
                                </p>
                            </label>
                        )
                    }

                    <button type="submit" className="auth-btn">{isSignUp ? 'SignUp' : 'Login'}</button>

                    {isSignUp && (
                        <p className="text-item">By Clicking SignUp, you agree to our
                            <span className="special-text">terms and <br/>conditions</span>, 
                            <span className="special-text"> privacy policy</span> and 
                            <span  className="special-text"> cookie policy</span>
                        </p>
                    )}
                </form>

                <p>
                    {isSignUp ? 'already have an account?' : "Dont have an account?"}
                    <button type="button" className="handle-switch-button" onClick={handleSwitch}>{isSignUp ? 'Login' : 'SignUp'}</button>
                </p>
            </div>
        </section>
    )
}

export default Auth;