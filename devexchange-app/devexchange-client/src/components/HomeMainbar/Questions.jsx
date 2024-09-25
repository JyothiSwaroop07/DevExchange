import React from "react";
import { Link } from "react-router-dom";

import './HomeMainbar.css'

const Questions = ({question}) => {
    console.log(question)

    return (
        <div className="display-question-container">

            <div className="display-votes-ans">
                <p>{question.upVote.length}</p>
                <p>Up Votes</p>
            </div>

            <div className="display-votes-ans">
                <p>{question.noOfAnswers}</p>
                <p>Answers</p>
            </div>

            <div className="display-question-details">
                <Link to={`/Questions/${question._id}`} className="question-title">
                    {question.questionTitle}
                </Link>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            question.questionTags.map((tag)=>(
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className="display-time">
                        asked {question.askedOn} {question.userPosted} 
                    </p>
                </div>
            </div>
            

        </div>
    )
}

export default Questions;