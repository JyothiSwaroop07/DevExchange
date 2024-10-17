import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import LeaderboardItem from "./LeaderBoardItem";
import './Leaderboard.css';

const LeaderboardList = () => {
    const users = useSelector((state) => state.usersReducer);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleSearch = (query) => {
        if (!query) {
            setFilteredUsers([...users].sort((a, b) => b.points - a.points));
        } else {
            const filtered = users
                .filter((user) =>
                    user.name.toLowerCase().includes(query.toLowerCase())
                )
                .sort((a, b) => b.points - a.points);
            setFilteredUsers(filtered);
        }
    };

    useEffect(() => {
        if (users) {
            const sortedUsers = [...users].sort((a, b) => b.points - a.points);
            setFilteredUsers(sortedUsers);
        }
    }, [users]);

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <div className="users-list-container">
                <h2>Top Contributors Rankings</h2>
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <LeaderboardItem
                                user={user}
                                index={index + 1}
                                key={user?._id}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default LeaderboardList;
