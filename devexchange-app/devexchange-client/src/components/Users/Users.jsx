import React from "react";
import { useLocation } from "react-router-dom";

import './Users.css'
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {

    const location = useLocation();

    return (
        <div className="users-page">
            <LeftSidebar />
            
            <div className="users-section">
                {
                    location.pathname==='/Users' ? 
                    
                    <UsersList /> :
                    <></>
                }
            </div>
        </div>
    )
}

export default Users;