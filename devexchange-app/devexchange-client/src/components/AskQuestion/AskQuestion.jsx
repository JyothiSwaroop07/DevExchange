import React from "react";
import { useNavigate } from 'react-router-dom';

import './AskQuestion.css';

const AskQuestion = () => {

    const user = null;
    const navigate = useNavigate();  // Use navigate instead of history

    const redirect = () => {
        alert("Login or signUp to ask a Question");
        navigate('/Auth');  // Corrected this line to use navigate
    }

    return (
        <>
            {user === null ? 
                redirect()
              :
            
            (
                <div>

                </div>
            )

            }
        </>
    )
}

export default AskQuestion;
