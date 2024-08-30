import React from 'react'
import './RightSidebar.css'
import { BsGlobe } from "react-icons/bs";

const Widget = () =>{
    return(
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1' >
                <div className='right-sidebar-div-2' >
                    <BsGlobe />
                    <p>This is a collaboratively edited question and answer site for professional and enthusiast programmers. It's 100% free.</p>
                </div>
                <div className='right-sidebar-div-2' >
                    <BsGlobe />
                    <p>Where does Postgres fit in a world of GenAI and vector databases?</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1' >
                <div className='right-sidebar-div-2' >
                    <BsGlobe />
                    <p>This is a collaboratively edited question and answer site for professional and enthusiast programmers. It's 100% free.</p>
                </div>
                <div className='right-sidebar-div-2' >
                    <BsGlobe />
                    <p>What does a new user need in a homepage experience on Stack Overflow?</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1' >
                <div className='right-sidebar-div-2' >
                    <BsGlobe />
                    <p>This is a collaboratively edited question and answer site for professional and enthusiast programmers. It's 100% free.</p>
                </div>
                <div className='right-sidebar-div-2' >
                    <BsGlobe />
                    <p>the [red] tag exists, and it's for the "Red" language</p>
                </div>
            </div>

        </div>
    )
}

export default Widget