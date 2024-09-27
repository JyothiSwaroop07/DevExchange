import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';

import logo from '../../assets/logo192.png';
import Avatar from '../../components/Avatar/Avatar';
import { CiSearch } from 'react-icons/ci';
import { setCurrentUser } from "../../actions/currentUser";
import { jwtDecode } from 'jwt-decode'; // Correct named import

const Navbar = () => {
    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer));
    const Navigate = useNavigate();

    // Wrap handleLogout in useCallback to prevent re-creation on every render
    const handleLogout = useCallback(() => {
        dispatch({ type: 'LOGOUT' });
        Navigate('/');
        dispatch(setCurrentUser(null));
    }, [dispatch, Navigate]);

    useEffect(() => {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch, User?.token]);

    return (
        <nav className="main-nav">
            <div className="navbar">
                <Link to="/" className="nav-item2 nav-btn nav-logo">
                    <img src={logo} alt="logo" width="198" />
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
                    <input type="text" placeholder="Search..." />
                    <CiSearch className="search-icon" />
                </form>

                {User === null ?
                    <Link to="/auth" className="nav-item nav-links">Log In</Link> :
                    <>
                        <Link to="/User" className="avatar">
                            <Avatar backgroundColor="#009ddf" px="10px" py="7px" borderRadius="50%" color="white" className="avatar-alpha">
                                {User.result.name.charAt(0).toUpperCase()}
                            </Avatar>
                        </Link>
                        <button className="nav-item nav-btn" onClick={handleLogout}>Log Out</button>
                    </>
                }
            </div>
        </nav>
    );
}

export default Navbar;
