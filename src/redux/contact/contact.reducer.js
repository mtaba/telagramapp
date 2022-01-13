import CONTACTS_DATA from "../../asset/contacts-data";
const INITIAL_STATE= {
    contacts : CONTACTS_DATA
}

const contactReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: return state ;   
    }
}

export default  contactReducer;