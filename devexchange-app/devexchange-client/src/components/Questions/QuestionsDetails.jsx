import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import copy from 'copy-to-clipboard';
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";

import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from './DisplayAnswer';
import { deleteQuestion, postAnswer, voteQuestion } from '../../actions/question';
import './Questions.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MemoizedAvatar = React.memo(({ userPosted }) => (
    <Avatar backgroundColor="orange" px="8px" py="5px">
        {userPosted.charAt(0).toUpperCase()}
    </Avatar>
));

const QuestionsDetails = () => {
    const { id } = useParams();
    const questionsList = useSelector(state => state.questionsReducer);

    const question = questionsList.data.find(question => question._id === id);
    const [Answer, setAnswer] = useState('');
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer));
    const location = useLocation();
    const url = 'http://localhost:3000';

    const handlePosAns = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert('Login or Signup to answer a question');
            Navigate('/Auth');
        } else {
            if (Answer === '') {
                alert('Enter an answer before submitting');
            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }));
                setAnswer('');
            }
        }
    };

    const handleShare = () => {
        copy(url + location.pathname);
        alert('Copied url : ' + url + location.pathname);
    };

    const handleDelete = () => {
        dispatch(deleteQuestion(id, Navigate));
    };

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upvote', User.result._id))
        console.log(id)
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downvote', User.result._id))
    }

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],        // toggle buttons
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['code-block'],
          ['link', 'image'],                               // link and image
          [{ 'align': [] }],                                // text alignment
          ['clean']                                         // remove formatting button
        ]
      };
    
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'code-block',
        'link', 'image',
        'align'
      ];

    return (
        <div className='question-details-page'>
            <section className='question-details-container'>
                <h1>{question.questionTitle}</h1>
                <div className='question-details-container-2'>
                    <div className="question-votes">
                        <BiSolidUpvote className='votes-icon' height={5} onClick={handleUpVote} />
                        <p>{question.upVote.length - question.downVote.length}</p>
                        <BiSolidDownvote className='votes-icon' onClick={handleDownVote} />
                    </div>
                    <div style={{ width: "100%" }}>
                    <div 
                            className='question-body' 
                            dangerouslySetInnerHTML={{ __html: question.questionBody }} 
                        />
                        <div className="question-details-tags">
                            {question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))}
                        </div>
                        <div className="question-actions-user">
                            <div>
                                <button type="button" onClick={handleShare}>Share</button>
                                {User?.result?._id === question?.userId && (
                                    <button type="button" onClick={handleDelete}>Delete</button>
                                )}
                            </div>
                            <div>
                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                <Link to={`/Users/${question._id}`} className="user-link" style={{ color: '#0086d8' }}>
                                    <MemoizedAvatar userPosted={question.userPosted} />
                                    <div>{question.userPosted}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {question.noOfAnswers !== 0 && (
                <section className="answers-section">
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                </section>
            )}
            
            <section className='post-ans-container'>
                <h3>Your Answer</h3>
                <form onSubmit={(e) => { handlePosAns(e, question.answer.length); }}>
                    {/* <textarea
                        name='answer'
                        id='answer'
                        cols="30"
                        rows="10"
                        value={Answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    ></textarea> */}

                     <ReactQuill
                        value={Answer} 
                        onChange={setAnswer} 
                        modules={modules}
                        formats={formats}
                        />  

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
