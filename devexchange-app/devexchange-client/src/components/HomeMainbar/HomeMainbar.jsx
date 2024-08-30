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
        upvotes: 3,
        downVotes : 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ['java', "react js", 'python' , 'C++'],
        userPosted: 'Chidvilash',
        userId:1,
        askedOn: 'Jan 1',
        answer:[{
            answerBody : "a function is a set of instructions that perform a specific task and can be used multiple times",
            userAnswered : "Swaroop",
            answeredOn :"Jan 2",
            userId : 2,
        }]
    },
    {
        id: 2,
        upvotes: 2,
        downVotes : 2,
        noOfAnswers: 2,
        questionTitle: "Virtual DOM ",
        questionBody: "How virtual DOM increases speed for ReactJS?",
        questionTags: ['javascript', 'node js', "react js", 'python'],
        userPosted: 'Chidvilash',
        userId:1,
        askedOn: 'Jan 1',
        answer:[{
            answerBody : "I read that ReactJS is very fast compared to other frameworks because if uses virtual dom.",
            userAnswered : "Swaroop",
            answeredOn :"Jan 2",
            userId : 2,
        }]
    },
    {
        id: 3,
        upvotes: 3,
        downVotes : 2,
        noOfAnswers: 2,
        questionTitle: "Controlled vs uncontrolled components in React",
        questionBody: "Controlled vs uncontrolled components in React",
        questionTags: ['java', 'node js', "react js", 'mongodb', 'python'],
        userPosted: 'Swaroop',
        userId:1,
        askedOn: 'Jan 1',
        answer:[{
            answerBody : "With a controlled input, you specify the value of the input with a state variable generally(or even a prop in some cases). In this case you need to call the onChange function to set the state(or the prop) since the value is set to a state/prop and you need to change that to change the value otherwise it will remain the same.",
            userAnswered : "Chidvilash",
            answeredOn :"Jan 2",
            userId : 2,
        }]
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