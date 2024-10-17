import React, { useState } from "react";

import { useSelector } from "react-redux";
import '../Users/Users.css'


import Navbar from "../Navbar/Navbar";
import LeaderboardItem from "./LeaderBoardItem";
import './Leaderboard.css'

const LeaderboardList = () => {

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
        <div className="users-list-container">
            
            {
                filteredUsers.map((user, index) => (
                    <LeaderboardItem user={user} index={index+1} key={user?._id} />
                ))
            }
        </div>
        </>
    )
}

export default LeaderboardList;