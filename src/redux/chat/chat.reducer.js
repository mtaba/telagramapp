const INITIAL_STATE= {
    curerntChat : null
}

const chatReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_CHAT':
            return {
                ...state,
                curerntChat: action.payload
            }
        default:
            return state;
    }
}

export default chatReducer;