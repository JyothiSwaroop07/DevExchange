import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {deleteAnswer} from '../../actions/question';

import './Questions.css'

const  DisplayAnswer = ({ question ,handleShare})=> {
  
  // Function to generate a random background color
  const getRandomColor = () => {
    const colors = ['orange', 'blue', 'green', 'purple', 'red', 'yellow', 'pink', 'teal'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const User = useSelector((state)=>(state.currentUserReducer))
  const {id} = useParams();
  const dispatch = useDispatch();

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers-1))
}

  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
            
            <div 
                
                dangerouslySetInnerHTML={{ __html: ans.answerBody }} 
            />
            <div className="question-actions-user">
              <div>
                <button type='button' onClick={handleShare} className='share'>Share</button>
                {
                    User?.result?._id === ans?.userId && (
                        <button type="button" onClick={()=>handleDelete(ans._id, question.noOfAnswers)} className='share'>Delete</button>
                    )
                }
              </div>
              <div>
                <p className='time'>answered {moment(ans.answeredOn).fromNow()}</p>
                <Link to={`/Users/${ans.userId}`} className="user-link" style={{ color: '#0086d8' }}>
                  <Avatar backgroundColor={getRandomColor()} px="8px" py="5px">
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>
                    {ans.userAnswered}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer;
