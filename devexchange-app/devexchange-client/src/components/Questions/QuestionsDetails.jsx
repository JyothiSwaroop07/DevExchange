import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Questions.css';
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from './DisplayAnswer';
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { deleteQuestion } from '../../actions/question';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const QuestionsDetails = () => {
    const { id } = useParams();

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    

    // Debugging
    console.log("Question ID from URL:", id);

    const questionsList = useSelector(state => state.questionsReducer);
    const User = useSelector((state)=>(state.currentUserReducer))
    
    // Debugging
    console.log("questionsList from Redux:", questionsList);

    if (!questionsList || !questionsList.data) {
        return <h1>Loading...</h1>;
    }

    const question = questionsList.data.find(question => question._id === id);

    console.log(question.upVote.length - question.downVote.length)
    
    // Handle case where question is not found
    if (!question) {
        return <h1>Question not found</h1>;
    }

    const handleDelete = () => {
        console.log("Deleting question with ID:", id);
        dispatch(deleteQuestion(id, Navigate))
    }

    return (
        <div className='question-details-page'>
            <section className='question-details-container'>
                <h1>{question.questionTitle}</h1>
                <div className='question-details-container-2'>
                    <div className="question-votes">
                        <BiSolidUpvote className='votes-icon' height={5} />
                        <p>{question.upVote.length - question.downVote.length}</p>
                        <BiSolidDownvote className='votes-icon' />
                    </div>
                    <div style={{ width: "100%" }}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className="question-details-tags">
                            {question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))}
                        </div>
                        <div className="question-actions-user">
                            <div>
                                <button type="button">Share</button>
                                {
                                    User?.result?._id === question?.userId && (
                                        <button type="button" onClick={handleDelete}>Delete</button>
                                    )
                                }
                                
                            </div>
                            <div>
                                <p>asked {question.askedOn}</p>
                                <Link to={`/User/${question._id}`} className="user-link" style={{ color: '#0086d8' }}>
                                    <Avatar backgroundColor="orange" px="8px" py="5px">
                                        {question.userPosted.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <div>
                                        {question.userPosted}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {question.noOfAnswers !== 0 && (
                <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer key={question.id} question={question} />
                </section>
            )}
            <section className='post-ans-container'>
                <h3>Your Answer</h3>
                <form>
                    <textarea name='' id='' cols="30" rows="10"></textarea>
                    <input type="submit" className='post-ans-btn' value="Post Your Answer" />
                </form>
                <p>
                    Browse other questions tagged
                    {question.questionTags.map((tag) => (
                        <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                    ))} or
                    <Link to="/AskQuestion" style={{ textDecoration: 'none', color: "#009dff" }}> ask your own question.</Link>
                </p>
            </section>
        </div>
    );
}

export default QuestionsDetails;
