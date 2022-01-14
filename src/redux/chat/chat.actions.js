const setCurrentChat = chat =>({
   type : 'SET_CURRENT_CHAT',
   payload: chat,
})

export const addMessage = newChatObj =>({
   type: 'ADD_MESSAGE',
   payload: newChatObj
})
export default setCurrentChat;