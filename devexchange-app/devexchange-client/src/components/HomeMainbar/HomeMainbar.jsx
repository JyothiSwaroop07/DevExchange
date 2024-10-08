import React from "react";
import { useSelector } from "react-redux";

import { useLocation,useNavigate } from "react-router-dom";
import { useEffect } from "react";

import './HomeMainbar.css'

import QuestionsList from "./QuestionsList";
import Navbar from "../Navbar/Navbar";

import { useState } from "react";

const HomeMainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate();  

    const questionsList = useSelector(state=>state.questionsReducer)

    const [filteredQuestions, setFilteredQuestions] = useState(questionsList.data || []);
    

    useEffect(() => {
        setFilteredQuestions(questionsList.data || []);

        const sortedFiltered = filteredQuestions.sort((a, b) => {
            const upvoteDiff = a.upVote.length - b.upVote.length; // Sort by upvotes (descending)
            if (upvoteDiff !== 0) {
                return upvoteDiff;
            }
            return a.noOfAnswers - b.noOfAnswers;
        });

        setFilteredQuestions(sortedFiltered);
    }, [questionsList, filteredQuestions]);

    const checkAuth = () =>{
        if(user===null)
        {
            alert("Login or signUp to ask a Question");
            navigate('/Auth'); 
        }else{
            navigate('/AskQuestion')
        }
    }

    const handleSearch = (query) => {
        console.log(query, "1")
        if (!query) {
            setFilteredQuestions(questionsList.data);
        } else {
            const filtered = questionsList.data.filter((question) =>
                question.questionTitle.toLowerCase().includes(query.toLowerCase()) ||
                question.questionTags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
                question.answer.some(ans => ans.answerBody.toLowerCase().includes(query.toLowerCase()))
            );

            const sortedFiltered = filtered.sort((a, b) => {
                const upvoteDiff = a.upVote.length - b.upVote.length; // Sort by upvotes (descending)
                if (upvoteDiff !== 0) {
                    return upvoteDiff;
                }
                return a.noOfAnswers - b.noOfAnswers;
            });

            setFilteredQuestions(sortedFiltered);
        }
    };

    return (
        <>
        <Navbar onSearch={handleSearch}/>
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === "/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className="ask-btn" >Ask Question</button>
            </div>

            <div>
                {
                    filteredQuestions === null ?
                        <h1>Loading...</h1> :
                        <>
                            <p className="count">
                                {filteredQuestions.length} questions
                            </p>
                            
                           <QuestionsList questionList={filteredQuestions} />
                            
                        </>
                }
            </div>
        </div>
        </>
    )
}

export default HomeMainbar;