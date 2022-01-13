import {connect} from 'react-redux';
import "./messageList.styles.scss"

const MessageList = ({currentChat})=>{
    const {messages} = currentChat;
 return(
     <div className="message-list-container">
          {
             messages.map(message=> (
                <div key={message.id} className="message">
                    {message.text}
                </div>
             ))
         }
     </div>
 )
}

const mapStateToProps = ({ chat }) => ({
    currentChat: chat.currentChat
  });
  
export default connect( mapStateToProps)(MessageList);
