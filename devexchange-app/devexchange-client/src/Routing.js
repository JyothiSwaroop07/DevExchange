import React from "react";

import { Routes, Route} from 'react-router-dom'; 

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/Auth" Component={Auth} />
        </Routes>
    )
}

export default Routing;