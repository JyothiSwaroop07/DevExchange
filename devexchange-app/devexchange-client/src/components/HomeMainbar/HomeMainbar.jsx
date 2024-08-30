import React from "react";

import { Link, useLocation } from "react-router-dom";

import './HomeMainbar.css'

import QuestionsList from "./QuestionsList";

const HomeMainbar = () => {

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

    const location = useLocation()

    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === "/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <Link to="/AskQuestion" className="ask-btn" >Ask Question</Link>
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