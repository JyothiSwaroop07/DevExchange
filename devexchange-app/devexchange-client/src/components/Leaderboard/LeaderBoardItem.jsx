import React from "react";
import { Link } from "react-router-dom";
import './Leaderboard.css';

const LeaderboardItem = ({ user, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <Link to={`/Users/${user._id}`} className="user-link">
                    {user.name}
                </Link>
            </td>
            <td>{user.email}</td>
            <td>{user.points} points</td>
        </tr>
    );
};

export default LeaderboardItem;
