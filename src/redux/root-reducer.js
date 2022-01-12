import { combineReducers } from "redux";
import chatReducer from "./chat/chat.reducer";

export default combineReducers({
    chat: chatReducer
})