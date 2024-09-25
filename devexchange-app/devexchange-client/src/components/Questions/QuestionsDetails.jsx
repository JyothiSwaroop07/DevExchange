import React ,{useState}from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from './DisplayAnswer';
import {postAnswer} from '../../actions/question'
import './Questions.css';

const QuestionsDetails = () => {
    const { id } = useParams();
    const questionsList = useSelector(state => state.questionsReducer);

    const question = questionsList.data.find(question => question._id === id);
    const [Answer,setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state)=>(state.currentUserReducer))
    const handlePosAns = (e,answerLength) =>{
        e.preventDefault()
        console.log(answerLength)
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        }else{
            if(Answer === ''){
                alert('Enter an answer before submitting')
            }else{
                dispatch(postAnswer({id, noOfAnswers : answerLength + 1, answerBody : Answer, userAnswered: User.result.name}))
            }
        }
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
                                <button type="button">Delete</button>
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
                    <DisplayAnswer key={question._id} question={question} />
                </section>
            )}
            <section className='post-ans-container'>
                <h3>Your Answer</h3>
                <form onSubmit={(e) =>{handlePosAns(e,question.answer.length) }}>
                    <textarea name='answer' id='answer' cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)} ></textarea>
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
