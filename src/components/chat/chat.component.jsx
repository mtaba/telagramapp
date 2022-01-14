import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom'
import Avatar from "../avatar/avatar.component";
import UserCaption from "../userCaption/userCaption.component";
import  setCurrentChat from '../../redux/chat/chat.actions';

import './chat.styles.scss';

function Chat({chat , setCurrentChat}){
    const history = useHistory();
    let latMessageIndex =chat.messages.length-1
    function handleClick(){
        setCurrentChat(chat);
        history.push("/chat");
    }
  return  (
          <li  className="chatlist-chat" onClick={handleClick}>
          <Avatar imageUrl={chat.picture} />
          <UserCaption  title={chat.messages[0].from} subtitle={chat.messages[latMessageIndex].text.substr(0,20)} />
          </li>
  ) 
}

const mapDispatchToProps = dispatch =>({
    setCurrentChat: chat => dispatch(setCurrentChat(chat))
    })
export default connect(null, mapDispatchToProps)(Chat);