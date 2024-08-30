import React from 'react'
import './RightSidebar.css'
import { FaPen } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const Widget = () =>{
    return(
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1' >
                <div className='right-sidebar-div-2' >
                    <FaPen  className='right-sidebar-icon' />
                    <p>This is a collaboratively edited question and answer site for professional and enthusiast programmers. It's 100% free.</p>
                </div>
                <div className='right-sidebar-div-2' >
                    <FaPen />
                    <p>Where does Postgres fit in a world of GenAI and vector databases?</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1' >
                <div className='right-sidebar-div-2' >
                    <FaRegCommentAlt className='right-sidebar-icon' />
                    <p>We've made changes to our Terms of Service & Privacy Policy - July 2024</p>
                </div>
                <div className='right-sidebar-div-2' >
                    <FaRegCommentAlt className='right-sidebar-icon' />
                    <p> Bringing clarity to status tag usage on meta sites</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1' >
                <div className='right-sidebar-div-2' >
                    <FaMeta className='right-sidebar-icon' />
                    <p> Is this (highly upvoted) question acceptable or does it "Need more focus"?</p>
                </div>
                <div className='right-sidebar-div-2' >
                    <FaMeta className='right-sidebar-icon' />
                    <p>the [red] tag exists, and it's for the "Red" language</p>
                </div>
            </div>

        </div>
    )
}

export default Widget