import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

import logo from '../../assets/logo192.png';

import Avatar from '../../components/Avatar/Avatar';

const Navbar = () => {

    var User = null;

    return (
        <nav className="main-nav">
            <div className="navbar">
                <Link to="/" className="nav-item nav-btn nav-logo">
                    <img src={logo} alt="logo" width="28"/>
                    <h1>Dev Exchange</h1>
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    About
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    Products
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    For Teams
                </Link>

                <form>
                    <input type="text" placeholder="Search..."/>
                    <img src={logo} alt="search-icon" className="search-icon" width="18"/> 
                </form>

                {User===null ? 
                    <Link to="/auth" className="nav-item nav-links">Log In</Link> :

                    <>
                        <Link to="/User" className="avatar">
                            <Avatar backgroundColor="#009ddf" px="10px" py="7px" borderRadius="50%" color="white" className="avatar-alpha">S</Avatar>
                        </Link>
                        <button className="nav-item nav-btn">Log Out</button>
                    </>
                    
                } 
            </div>
        </nav>
    )
}

export default Navbar;