import React from "react";

import logo from '../../assets/logo192.png'

import './Auth.css';

const AboutAuth = () => {
    return (
        <div className="auth-container1">
            <img src={logo} alt="devexchange" className="login-logo"/>
            <h1>Join the DevExchange Community</h1>
            <p>Get Unstuck -  Ask a Question</p>
            <p>Unlock new priveleges like voting and commenting</p>
            <p>Save your favourite tags, jobs and filters</p>
            <p>Earn Badges and Rewards</p>
            <p className="text-item">Collaborate and share knowledge and gain knowledge</p>
        </div>
    )
}

export default AboutAuth;