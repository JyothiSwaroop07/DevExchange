import React from "react";

import { useLocation,useNavigate } from "react-router-dom";

import './HomeMainbar.css'

import QuestionsList from "./QuestionsList";

const HomeMainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate();  

    var questionList = [{
        id: 1,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ['java', 'node js', "react js", 'mongodb', 'python'],
        userPosted: 'manu',
        askedOn: 'Jan 1'
    },
    {
        id: 2,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ['java', 'node js', "react js", 'mongodb', 'python'],
        userPosted: 'manu',
        askedOn: 'Jan 1'
    },
    {
        id: 3,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ['java', 'node js', "react js"],
        userPosted: 'manu',
        askedOn: 'Jan 1'
    }]

    const checkAuth = () =>{
        if(user===null)
        {
            alert("Login or signUp to ask a Question");
            navigate('/Auth'); 
        }else{
            navigate('/AskQuestion')
        }
    }

    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === "/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className="ask-btn" >Ask Question</button>
            </div>

            <div>
                {
                    questionList === null ?
                        <h1>Loading...</h1> :
                        <>
                            <p>
                                {questionList.length} questions
                            </p>
                            
                           <QuestionsList questionList={questionList} />
                            
                        </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar;