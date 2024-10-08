import React,{useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './AskQuestion.css';
import {askQuestion} from '../../actions/question'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AskQuestion = () => {

    const [questionTitle ,setQuestionTitle] = useState('')
    const [questionBody ,setQuestionBody] = useState('')
    const [questionTags ,setQuestionTags] = useState('')
    
    const dispatch = useDispatch()
    const User = useSelector((state)=>(state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted: User.result.name, userId: User?.result._id},navigate))
    }

    const handleEnter = (e) =>{
        if(e.key === 'Enter')
        {
            setQuestionBody(questionBody + "\n");

            if (!User || !User.result) {
                alert("You need to log in to post a question.");
                return;
            }
        }
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
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a Public Question</h1>
                <form onSubmit = {handleSubmit} >
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you are asking a question to another person.</p>
                            <input type="text" name="QuestionTitle" id="ask-ques-title" onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            {/* <textarea name="QuestionBody" id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter} ></textarea> */}
                            <ReactQuill
                                value={questionBody} 
                                onChange={setQuestionBody} 
                                modules={modules}
                                formats={formats}
                                onKeyPress={handleEnter}
                                id="ask-ques-body" 
                                className="custom-quill"
                            />
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                            <input type="text" name="QuestionTags" id="ask-ques-tags" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder="e.g. (typescript django asp.net)" />
                        </label>
                    </div>
                    <input type="submit" value="Review your question" className="review-btn" />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion;
