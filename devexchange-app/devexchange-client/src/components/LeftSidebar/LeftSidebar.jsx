import React from "react";
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import { BsGlobe } from "react-icons/bs";

const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <nav className="side-nav">
                <NavLink to="/" className="side-nav-links" activeClassName = "active">
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                    <div>
                        <p>PUBLIC</p>
                    </div>
                    <NavLink to="/Questions" className="side-nav-links" activeClassName = "active">
                        <BsGlobe />
                        <p style={{paddingLeft:"10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to="/Tags" style={{paddingLeft:"40px"}} className="side-nav-links" activeClassName = "active">
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to="/users" style={{paddingLeft:"40px"}} className="side-nav-links" activeClassName = "active">
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar;