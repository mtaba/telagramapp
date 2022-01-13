import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom'
import Avatar from "../avatar/avatar.component";
import UserCaption from "../userCaption/userCaption.component";
import  setCurrentChat from '../../redux/chat/chat.actions';

import './chat.styles.scss';

function Chat({chat , setCurrentChat}){
    const history = useHistory();
    function handleClick(){
        setCurrentChat(chat);
        history.push("/chat");
    }
  return  (
          <li  className="chatlist-chat" onClick={handleClick}>
          <Avatar />
          <UserCaption  title={chat.messages[0].from} subtitle={chat.messages[0].text.substr(0,10)} />
          </li>
  ) 
}

const mapDispatchToProps = dispatch =>({
    setCurrentChat: chat => dispatch(setCurrentChat(chat))
    })
export default connect(null, mapDispatchToProps)(Chat);