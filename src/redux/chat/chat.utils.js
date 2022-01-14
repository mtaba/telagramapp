 const addMessageToChat = (chats,newChatObj) => {
   
     const existingchat = chats.find(
       chat => chat.id === newChatObj.chatId
     );
  
     if (existingchat) {
       existingchat.messages.push(newChatObj.message);
       return chats;
     }
     else{
      console.log("not found");
     }
     
    }
    export default addMessageToChat;