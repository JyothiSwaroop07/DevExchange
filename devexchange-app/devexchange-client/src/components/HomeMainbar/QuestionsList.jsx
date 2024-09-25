import React from "react";
import Questions from "./Questions";

const QuestionsList = ({questionList}) => {
    console.log(questionList)
    console.log(JSON.stringify(questionList, null, 2));

    return (
        <>
            {
            questionList.map((question) =>(
                <Questions question={question} key={question._id}/>
            ))
            }   
        </>
    )
}

export default QuestionsList;