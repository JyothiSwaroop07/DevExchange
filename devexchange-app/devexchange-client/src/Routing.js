import React from "react";

import { Routes, Route} from 'react-router-dom'; 

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import AskQuestion from "./components/AskQuestion/AskQuestion";

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/Auth" Component={Auth} />
            <Route exact path="/AskQuestion" Component={AskQuestion} />
        </Routes>
    )
}

export default Routing;