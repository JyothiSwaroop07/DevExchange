import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { useLocation } from "react-router-dom";

import '../../App.css';
import '../Users/Users.css'

import LeaderboardList from "./LeaderboardList";

const LeaderBoard = () => {

    const location = useLocation();

    return (
        <div className="users-page">
            <LeftSidebar />
            <div className="user-section">
            {
                    location.pathname==='/leaderboard' ? 
                    
                    <LeaderboardList /> :
                    <></>
                }
            </div>
        </div>
    )
}
export default LeaderBoard;