const INITIAL_STATE= {
    currentChat : null,
    messages: ''
}

const chatReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_CHAT':
            return {
                ...state,
                currentChat: action.payload
            }
        case 'ADD_MESSAGE':
                return {
                    ...state,
                   messages: action.payload
                }    
        default:
            return state;
    }
}

export default chatReducer;