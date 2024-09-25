import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

const  DisplayAnswer = ({ question })=> {
  
  // Function to generate a random background color
  const getRandomColor = () => {
    const colors = ['orange', 'blue', 'green', 'purple', 'red', 'yellow', 'pink', 'teal'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-actions-user">
              <div>
                <button type='button'>Share</button>
                <button type='button'>Delete</button>
              </div>
              <div>
                <p>answered {ans.answeredOn}</p>
                <Link to={`/User/${question.userId}`} className="user-link" style={{ color: '#0086d8' }}>
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
