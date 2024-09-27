import React from "react";
import { Link } from "react-router-dom";
import './HomeMainbar.css';
import moment from 'moment';

const Questions = ({ question }) => {
    return (
        <Link to={`/Questions/${question._id}`} className="display-question-container">

            {/* Left side: Question title, name, time, tags */}
            <div className="display-question-details">
            <Link to={`/Questions/${question._id}`} className="question-title-link">
                    {question.questionTitle}
                </Link>
                <p className="display-time">
                    asked {moment(question.askedOn).fromNow()} by {question.userPosted}
                </p>
                <div className="display-tags">
                    {question.questionTags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))}
                </div>
            </div>

            {/* Right side: Upvotes and answers */}
            <div className="display-votes-ans">
                <p>{question.upVote.length}</p>
                <p>Up Votes</p>
            </div>
            <div className="display-votes-ans">
                <p>{question.noOfAnswers}</p>
                <p>Answers</p>
            </div>
        </Link>
    );
};

export default Questions;
