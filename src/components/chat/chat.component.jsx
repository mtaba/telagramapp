import {connect} from 'react-redux';
import Avatar from "../avatar/avatar.component";
import UserCaption from "../userCaption/userCaption.component";
import  setCurrentChat from '../../redux/chat/chat.actions';

import './chat.styles.scss';

function Chat({setCurrentChat, chat}){

    function handleClick(){
        setCurrentChat(chat);
    }
  return  (
          <li  className="chatlist-chat" onClick={handleClick}>
          <Avatar />
          <UserCaption  messages={chat.messages} />
          </li>
  ) 
}

const mapDispatchToProps = dispatch =>({
    setCurrentChat: chat => dispatch(setCurrentChat(chat))
    })
export default connect(null, mapDispatchToProps)(Chat);