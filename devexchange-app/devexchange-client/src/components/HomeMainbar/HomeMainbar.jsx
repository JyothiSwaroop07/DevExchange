import React from "react";
import { useSelector } from "react-redux";

import { useLocation,useNavigate } from "react-router-dom";

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
            setFilteredQuestions(filtered);
            console.log(filteredQuestions.length)
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
                    questionsList.data === null ?
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