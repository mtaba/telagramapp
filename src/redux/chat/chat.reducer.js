import CHAT_DATA from "../../asset/chats-data";
const INITIAL_STATE= {
    currentChat : null,
    chats: CHAT_DATA
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