import React from "react";

import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import HomeMainbar from "../HomeMainbar/HomeMainbar";

const Questions = () => {
    return (
        <div className="home-container1">

        <LeftSidebar />
        <div className="home-container2">
            <HomeMainbar />
            <RightSidebar />
        </div>    

        </div>
    )
}

export default Questions;