import React from "react";
import Questions from "./Questions";

const QuestionsList = ({questionList}) => {

    return (
        <>
            {
            questionList.slice(0).reverse().map((question) =>(
                <Questions question={question} key={question._id}/>
            ))
            }   
        </>
    )
}

export default QuestionsList;