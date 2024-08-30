import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion = () => {

    var questionList = [{
        id: 1,
        upvotes: 3,
        downVotes : 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ['java', "react js", 'python' , 'C++'],
        userPosted: 'Chidvilash',
        userId:1,
        askedOn: 'Jan 1',
        answer:[{
            answerBody : "a function is a set of instructions that perform a specific task and can be used multiple times",
            userAnswered : "Swaroop",
            answeredOn :"Jan 2",
            userId : 2,
        }]
    },
    {
        id: 2,
        upvotes: 5,
        downVotes : 2,
        noOfAnswers: 2,
        questionTitle: "Virtual DOM ",
        questionBody: "How virtual DOM increases speed for ReactJS?",
        questionTags: ['javascript', 'node js', "react js", 'python'],
        userPosted: 'Chidvilash',
        userId:1,
        askedOn: 'Jan 1',
        answer:[{
            answerBody : "I read that ReactJS is very fast compared to other frameworks because if uses virtual dom.",
            userAnswered : "Swaroop",
            answeredOn :"Jan 2",
            userId : 2,
        }]
    },
    {
        id: 3,
        upvotes: 3,
        downVotes : 2,
        noOfAnswers: 2,
        questionTitle: "Controlled vs uncontrolled components in React",
        questionBody: "Controlled vs uncontrolled components in React",
        questionTags: ['java', 'node js', "react js", 'mongodb', 'python'],
        userPosted: 'manu',
        userId:1,
        askedOn: 'Jan 1',
        answer:[{
            answerBody : "With a controlled input, you specify the value of the input with a state variable generally(or even a prop in some cases). In this case you need to call the onChange function to set the state(or the prop) since the value is set to a state/prop and you need to change that to change the value otherwise it will remain the same.",
            userAnswered : "Kumar",
            answeredOn :"Jan 2",
            userId : 2,
        }]
    }]

  return (
    <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2">
                <QuestionsDetails questionList={questionList}/>
                <RightSidebar />
            </div>    

        </div>
  )
}

export default DisplayQuestion