const INITIAL_STATE= {
    currentChat : null
}

const chatReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_CHAT':
            return {
                ...state,
                currentChat: action.payload
            }
        default:
            return state;
    }
}

export default chatReducer;