import { combineReducers } from "redux";
import chatReducer from "./chat/chat.reducer";
// import messageReducer from "./message/message.reducer";
import contactReducer from './contact/contact.reducer';

export default combineReducers({
    chat: chatReducer,
     contact : contactReducer,
})