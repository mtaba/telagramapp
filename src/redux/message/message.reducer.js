import CHAT_DATA from '../../asset/chats-data'
const INITIAL_STATE= {
    currentMessages : CHAT_DATA
}
console.log( INITIAL_STATE);
const messageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_MESSAGE':
            return {
                ...state,
                currentMessages: action.payload
            }
        default:
            return state;
    }
}

export default messageReducer;