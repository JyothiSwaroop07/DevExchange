import React, { useState } from "react";

import { useSelector } from "react-redux";
import './Users.css'

import User from "./User";
import Navbar from "../Navbar/Navbar";

const UsersList = () => {

    const users = useSelector((state)=>state.usersReducer)
    console.log(users);

    const [filteredUsers, setFilteredUsers] = useState(users || []);

    const handleSearch = (query) => {
        console.log(query, "1")
        if (!query) {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) =>
                user.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };


    return (
        <>
        <Navbar onSearch={handleSearch}/>
        <div className="user-list-container">
            
            {
                filteredUsers.map((user) => (
                    <User user={user} key={user?._id} />
                ))
            }
        </div>
        </>
    )
}

export default UsersList;