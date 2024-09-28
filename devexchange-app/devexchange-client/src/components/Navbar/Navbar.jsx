import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';


import Avatar from '../../components/Avatar/Avatar';
import { CiSearch } from 'react-icons/ci';
import { setCurrentUser } from "../../actions/currentUser";

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
                
                {/* <Link to="/" className="nav-item nav-btn">
                    About
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    Products
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    For Teams
                </Link> */}

                <form>
                    <input type="text" placeholder="Search..." className="search"/>
                    <CiSearch className="search-icon" />
                </form>

                {User === null ?
                    <Link to="/auth" className="nav-item nav-links">Log In</Link> :
                    <>
                        <Link to="/Users" className="avatar">
                            <Avatar backgroundColor="#009ddf" px="10px" py="7px" borderRadius="50%" className="avatar-alpha"  color="white">
                                <Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}} >
                                    {User.result.name.charAt(0).toUpperCase()}</Link> 
                            </Avatar>
                        </Link>
                        <button className="nav-links" onClick={handleLogout}>Log Out</button>
                    </>
                }
            </div>
        </nav>
    );
}

export default Navbar;
