import React from "react";
import { Link } from "react-router-dom";
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

import logo from '../../assets/logo192.png'



const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <nav className="side-nav">
            <Link to="/" className="nav-item2 nav-btn nav-logo">
                    <img src={logo} alt="logo" width="198" />
                </Link>
                <NavLink to="/" className="side-nav-links"  activeClassName = "active">
                <FaHome />
                    <p style={{paddingLeft:"10px"}}>Home</p>
                </NavLink>
                
                    <NavLink to="/Questions" className="side-nav-links" activeClassName = "active">
                        <BsGlobe />
                        <p style={{paddingLeft:"10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to="/Tags"  className="side-nav-links" activeClassName = "active">
                        <FaTags />
                        <p style={{paddingLeft:"10px"}}>Tags</p>
                    </NavLink>
                    <NavLink to="/leaderboard"  className="side-nav-links" activeClassName = "active">
                    <MdLeaderboard />
                        <p style={{paddingLeft:"10px"}}>Leaderboard</p>
                    </NavLink>
                    <NavLink to="/Users"  className="side-nav-links" activeClassName = "active">
                    <FaUsers />
                        <p style={{paddingLeft:"10px"}}>Users</p>
                    </NavLink>
                    
                
            </nav>
        </div>
    )
}

export default LeftSidebar;