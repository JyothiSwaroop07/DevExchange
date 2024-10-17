import Questions from '../models/Questions.js'
import mongoose from 'mongoose'
import Users from '../models/auth.js'

export const AskQuestion = async (req,res) => {
    const postQuestionData = req.body;
    console.log(postQuestionData);
    const postQuestion = new Questions(postQuestionData);
    try{
        await postQuestion.save();

        await Users.findByIdAndUpdate(
            postQuestionData.userId, 
            { $inc: { points: 2 } }
        );

        res.status(200).json("Posted a question successfully");
    }catch(error){
        console.log(error)
        res.status(409).json("Couldn't post a new question")
    }
}

export const getAllQuestions = async(req,res) =>{
    try{
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    }catch(error){
        res.status(404).json({message : error.message});
    }
}

export const deleteQuestion = async(req, res) => {
    const { id:_id } = req.params;
    console.log("Received request to delete question with ID:", _id);

    if(!mongoose.Types.ObjectId.isValid(_id)){
        console.log("1");
        return res.status(404).send("Question Unavailable...");
        
    }

    try {
        const objectId = new mongoose.Types.ObjectId(_id);
        console.log("Parsed ObjectId:", objectId);
    
        // Use deleteOne for better control
        const deleteResult = await Questions.deleteOne({ _id: objectId });
        if (deleteResult.deletedCount === 0) {
            console.log("Failed to delete question, or question does not exist.");
            return res.status(404).json({ message: "Question not found or not deleted." });
        }
    
        console.log("Successfully deleted the question");
        res.status(200).json({ message: "Successfully deleted the question..." });
    } catch (error) {
        console.log("Error during deletion:", error);
        res.status(404).json({ message: error.message });
    }
    
}

export const voteQuestion = async(req, res) => {
    const {id:_id} = req.params;
    const {value, userId} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        console.log("1");
        return res.status(404).send("Question Unavailable...");
        
    }

    try{
        const question = await Questions.findById(_id);
        const upIndex = question.upVote.findIndex((id)=> id===String(userId))

        const downIndex = question.downVote.findIndex((id) => id===String(userId))

        if(value=='upvote'){
            if(downIndex!==-1){
                question.downVote = question.downVote.filter((id)=>id!==String(userId))
            }
            if(upIndex===-1){
                question.upVote.push(userId)
            }else{
                question.upVote = question.upVote.filter((id)=>id!==String(userId))
            }
        }
        else if(value=='downvote'){
            if(upIndex!==-1){
                question.upVote = question.upVote.filter((id)=>id!==String(userId))
            }
            if(downIndex===-1){
                question.downVote.push(userId)
            }else{
                question.downVote = question.downVote.filter((id)=>id!==String(userId))
            }
        }
        await Questions.findByIdAndUpdate(_id, question)
        res.status(200).json({message: "Vote updated successfully..."})

    }catch(error){
        res.status(404).json({message: "id not found..."})
    }
}