import React , {useState} from 'react'
import {connect} from 'react-redux';
// import PostMessageForm from '../../components/postMessageForm/postMessageForm.component';
import  {addMessage} from '../../redux/chat/chat.actions';
import "./messageList.styles.scss"

function MessageList(props){
     
    const {currentChat, addMessage} = props;
    console.log("currentChat",currentChat);
    const {messages} = currentChat;

    const [newMessage, setNewMessage] = useState('');

    function handleSubmit(e){
        e.preventDefault();
     
        let newMessageObject = {
            id: '',
            type : 'message',
            date : Date.now(),
            from: 'Mostafa Tabatabaeipur',
            from_id: 'user13640028',
            text: newMessage
        };
       let newChatObj = {
            chatId: currentChat.id,
            message: newMessageObject
        }
      

        console.log(currentChat);
        console.log(newChatObj);
        addMessage(newChatObj);
        setNewMessage('');
        
    }
 return(
     <>
     <div className="message-list-container">
          {
             messages.map(message=> (
                <div key={message.id} className="bubble-content" >
                    <div className="message">
                    {message.text}
                    </div>
                </div>
             ))
         }
     </div>
     <form onSubmit={handleSubmit} >
          <input name='messageText' value={newMessage} placeholder="messages" onChange={e=>setNewMessage(e.target.value)}/>
          <button type="submit" >Submit</button>
          </form>
      </>
 )
}

const mapStateToProps = ({ chat }) => ({
    currentChat: chat.currentChat,
    messages : chat.messages
  });

const mapDispatchToProps = dispatch =>({
    addMessage: newChatObj => dispatch(addMessage(newChatObj))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps)(MessageList);
