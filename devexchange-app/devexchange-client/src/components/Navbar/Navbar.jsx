import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

import logo from '../../assets/logo192.png';

import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';

const Navbar = () => {

    var User = null;

    return (
        <nav>
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
                        <Link to="/" className="avatar">
                            <Avatar>S</Avatar>
                        </Link>
                        <Button className="nav-item nav-btn">Log Out</Button>
                    </>
                    
                } 
            </div>
        </nav>
    )
}

export default Navbar;