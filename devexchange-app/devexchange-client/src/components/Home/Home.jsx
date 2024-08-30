import React from "react";

import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import HomeMainbar from "../HomeMainbar/HomeMainbar";

import '../../App.css'
    
const Home = () => {
    return (
        <div className="home-container-1">

            <LeftSidebar />
            <div className="home-container-2">
                <HomeMainbar />
                <RightSidebar />
            </div>    

        </div>
    )
}

export default Home;