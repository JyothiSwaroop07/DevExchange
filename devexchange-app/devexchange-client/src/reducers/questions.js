const initialState = { data: [] }; // Initialize with an empty array

const questionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'POST_QUESTION':
            return { ...state, data: [...state.data, action.payload] }; // Add new question to the array
        case 'FETCH_ALL_QUESTIONS':
            return { ...state, data: action.payload }; // Ensure payload is an array
        default:
            return state;
    }
};

export default questionsReducer;
