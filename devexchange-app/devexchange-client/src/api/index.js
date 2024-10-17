import axios from 'axios';

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: 'https://dev-exchange-fawn.vercel.app/' });
// const API = axios.create({ baseURL: 'http://localhost:5000' });

// Add a request interceptor to attach the token to each request
API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('Profile');
    if (profile) {
        const { token } = JSON.parse(profile);
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
    }
    return req; // Always return the request object
}, (error) => {
    // Handle any errors that occur during the request
    return Promise.reject(error);
});

// API function definitions
export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get'); 
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => 
    API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId });

export const deleteAnswer = (id, answerId, noOfAnswers) => 
    API.patch(`/answer/delete/${id}`, { id, answerId, noOfAnswers });

export const voteQuestion = (id, value, userId) => 
    API.patch(`/questions/vote/${id}`, { value, userId });

export const fetchAllUsers = () => API.get('/user/getAllUsers');

export const updateProfile = (id,updateData) => API.patch(`/user/update/${id}`,updateData)
