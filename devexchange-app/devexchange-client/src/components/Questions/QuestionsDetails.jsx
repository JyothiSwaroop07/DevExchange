import React from 'react';
import { useParams ,Link} from 'react-router-dom';
import './Questions.css';

import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from './DisplayAnswer';
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";


const QuestionsDetails = ({questionList}) => {
    const { id } = useParams();


    console.log("Question ID from URL:", id);  // Debugging

   

    return (
        <div className='question-details-page'>
            {questionList === null ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {questionList
                        .filter(question => question.id === parseInt(id))
                        .map(question => (
                            <div key={question.id}>
                                <section className='question-details-container'>
                                    <h1>{question.questionTitle}</h1>
                                    <div className='question-details-container-2'>
                                        <div className="question-votes">
                                            <BiSolidUpvote className='votes-icon' height={5} />
                                            <p>{question.upvotes - question.downVotes}</p>
                                            <BiSolidDownvote className='votes-icon' />
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <p className='question-body' >{question.questionBody}</p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag)=>(
                                                        <p key={tag} >{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div>
                                                    <button type="button" >Share</button>
                                                    <button type="button" >Delete</button>
                                                </div>
                                                <div>
                                                    <p>asked {question.askedOn}</p>
                                                    <Link to={`/User/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                                        <Avatar backgroundColor="orange" px="8px" py="5px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {question.userPosted}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers !== 0 && (
                                        <section>
                                            <h3>{question.noOfAnswers} answers</h3>
                                            <DisplayAnswer key={question.id} question={question} />
                                        </section>
                                    )
                                }
                                <section className='post-ans-container' >
                                    <h3 className='' >Your Answer</h3>
                                    <form>
                                        <textarea name='' id='' cols="30" rows ="10" > </textarea>
                                        <input type="Submit" className='post-ans-btn' value="Post Your Answer" />
                                    </form>
                                    <p>
                                        Browse other Question Tagged
                                        {
                                            question.questionTags.map((tag)=>(
                                                <Link to="/Tags" key={tag} className="ans-tags" >{tag}</Link>
                                            ))
                                        } or 
                                        <Link to="/AskQuestion" style={{textDecoration:'none' ,color:"#009dff"}} > ask your own question.</Link>
                                    </p>
                                </section>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
}

export default QuestionsDetails;
