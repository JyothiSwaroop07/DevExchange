import React, { useState } from 'react';
import './Feedback.css'; // Add your styles here

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className='main'>
        <div className="feedback-container">
            
            {submitted ? (
                <p>Thank you for your feedback!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Feedback</h3>
                    </div>
                    <div className="rating">
                        <label>Rating:</label>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => handleRatingChange(star)}
                                className={`star ${rating >= star ? 'filled' : ''}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <div>
                        <label>Feedback Message:</label>
                        <textarea
                            value={feedbackMessage}
                            onChange={(e) => setFeedbackMessage(e.target.value)}
                            required
                            placeholder="Your feedback here..."
                        />
                    </div>
                    <button type="submit">Submit Feedback</button>
                </form>
            )}
        </div>
        </div>
    );
};

export default Feedback;
