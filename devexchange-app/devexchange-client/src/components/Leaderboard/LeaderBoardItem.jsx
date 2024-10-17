import React from "react";
import { Link } from "react-router-dom";
import './Leaderboard.css'

const LeaderboardItem = ({user, index}) => {
    console.log(user);

    const color = index%2===0 ? 'aliceblue' : 'antiquewhite';

    return (
        <Link to={`/Users/${user._id}`} className={`user-item ${color}`}>
            <h5>
                {index}
            </h5>
            <h5>
                {user.name}
            </h5>
            <h5>
                {user.email}
            </h5>
        </Link>
    )
}

export default LeaderboardItem;