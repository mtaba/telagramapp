const setCurrentChat = chat =>({
   type : 'SET_CURRENT_CHAT',
   payload: chat,
})
const addMessage = chat =>({
   type : 'ADD_MESSAGE',
   payload: chat.messages,
})

export {addMessage};
export default setCurrentChat;