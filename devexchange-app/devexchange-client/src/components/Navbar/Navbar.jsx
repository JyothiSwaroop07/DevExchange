import React, { useEffect, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';


import Avatar from '../../components/Avatar/Avatar';
import { CiSearch } from 'react-icons/ci';
import { setCurrentUser } from "../../actions/currentUser";


const Navbar = ({onSearch}) => {
    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer));
    const Navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");

    // Wrap handleLogout in useCallback to prevent re-creation on every render
    const handleLogout = useCallback(() => {
        dispatch({ type: 'LOGOUT' });
        Navigate('/');
        dispatch(setCurrentUser(null));
    }, [dispatch, Navigate]);

    useEffect(() => {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch, User?.token]);


    const handleSearch = (e) => {
        e.preventDefault();
        console.log("search called")
        onSearch(searchQuery);
    };

    const handleSearchChange = (val) => {
        setSearchQuery(val);
        onSearch(val);
    }

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

                <form onSubmit={handleSearch}>
                <   input
                        type="text"
                        placeholder="Search..."
                        className="search"
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                    <CiSearch className="search-icon" />
                    
                </form>

                {User === null ?
                    <Link to="/auth" className="">
                        <button className="nav-links" >Log In</button>
                    </Link> :
                    <>
                        <Link to="/User" className="avatar">
                            <Avatar backgroundColor="#009ddf" px="10px" py="7px" borderRadius="50%" style={{textDecoration: 'none'}} color="white" className="avatar-alpha">
                                {User.result.name.charAt(0).toUpperCase()}
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
