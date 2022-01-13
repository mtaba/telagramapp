import React , {useState} from 'react'
import {connect} from 'react-redux';
// import PostMessageForm from '../../components/postMessageForm/postMessageForm.component';
import  addMessage from '../../redux/chat/chat.actions';
import "./messageList.styles.scss"

function MessageList(props){
    console.log("props ni message List:", props);
    const {currentChat} = props;
    const {messages} = currentChat;

    const [newMessage, setNewMessage] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(newMessage);
        addMessage(newMessage);
        
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
    addMessage: newMessage => dispatch(addMessage(newMessage))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps)(MessageList);
