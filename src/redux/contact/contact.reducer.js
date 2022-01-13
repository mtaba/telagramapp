import CONTACTS_DATA from "../../asset/contacts-data";
const INITIAL_STATE= {
    contacts : CONTACTS_DATA
}

const contactReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_CONTACT':
            return {
                ...state,
                currentContact: action.payload
            }
        default: return state ;   
    }
}

export default  contactReducer;