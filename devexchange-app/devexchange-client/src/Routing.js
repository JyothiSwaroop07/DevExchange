import React from "react";
import { Routes, Route } from 'react-router-dom'; 

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import Questions from "./components/Questions/Questions";
import DisplayQuestion from "./components/Questions/DisplayQuestion";
import Users from "./components/Users/Users";
import Tags from "./components/Tags/Tags";


const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Auth" element={<Auth />} />
            <Route exact path="/AskQuestion" element={<AskQuestion />} />
            <Route exact path="/Questions" element={<Questions />} />
            <Route exact path="/Questions/:id" element={<DisplayQuestion />} />
            <Route exact path="/Users" element={<Users/>} />
            <Route exact path = "/Tags" element={<Tags/>}/>
        </Routes>
    );
}

export default Routing;
