import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/chat/chat.actions";
import "./messageList.styles.scss";


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function MessageList(props) {
  const { currentChat, addMessage } = props;
  const { messages } = currentChat;
  console.log("messages:",messages);
  const inputRef = useRef(null);

  const [newMessage, setNewMessage] = useState("");
  const [isReply, setIsReply] = useState(false);
  const [reply_to_message_id , setReply_To_Message_Id ] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const newId = getRandom(10000, 100000);
    let newMessageObject= null;
    
    if(isReply){
      newMessageObject = {
        id: newId,
        type: "message",
        date: Date.now(),
        from: "Mostafa Tabatabaeipur",
        from_id: "user13640028",
        reply_to_message_id: parseInt(reply_to_message_id),
        text: newMessage,
      }
      
    }
    else{
      newMessageObject = {
        id: newId,
        type: "message",
        date: Date.now(),
        from: "Mostafa Tabatabaeipur",
        from_id: "user13640028",
        text: newMessage,
      }
    }
   
    let newChatObj = {
      chatId: currentChat.id,
      message: newMessageObject,
    };
    setNewMessage("");
    setIsReply(false);
    addMessage(newChatObj);
    
  }

  function handleClick(e){
    
    setReply_To_Message_Id(e.target.getAttribute("message-id"));
    setIsReply(true);
    inputRef.current.focus();
  }

  function findParent(reply_id){
    console.log("reply id",reply_id);
   let parentMessage=  messages.filter(message => message.id == reply_id);
   console.log("parent:", parentMessage);
   if(reply_id !== null)
      return parentMessage[0].text; 
  else return '';
  }

  return (
    <div className="chat-input-container">
      <div className="message-list-container">
        {messages.map((message) => (
          <div className="buble-container">
            <div
              key={message.id}
              className={`bubble-content ${
                message.from_id === "user13640028" ? "is-out" : ""
              }`}
            >
              {message['reply_to_message_id'] !== undefined  && message['reply_to_message_id'] != null &&
              <div className="is-reply">{findParent(message['reply_to_message_id'])}</div>
            }
              <div className="message">{message.text}</div>
            </div>
            <span className="replyLink" message-id={message.id} onClick={handleClick}>reply</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          ref={inputRef} 
          className="message-input"
          name="messageText"
          value={newMessage}
          placeholder="messages"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="messages-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ chat }) => ({
  currentChat: chat.currentChat,
  messages: chat.messages,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (newChatObj) => dispatch(addMessage(newChatObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
