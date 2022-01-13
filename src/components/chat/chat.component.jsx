import {connect} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom'
import Avatar from "../avatar/avatar.component";
import UserCaption from "../userCaption/userCaption.component";
import  setCurrentChat from '../../redux/chat/chat.actions';

import './chat.styles.scss';

function Chat(props){
    const history = useHistory();
//    const {setCurrentChat, chat} = props;
    function handleClick(){
        setCurrentChat(props.chat);
        history.push("/chat");
        // props.history.push("/chat");
       
    }
  return  (
          <li  className="chatlist-chat" onClick={handleClick}>
          <Avatar />
          <UserCaption  messages={props.chat.messages} />
          </li>
  ) 
}

const mapDispatchToProps = dispatch =>({
    setCurrentChat: chat => dispatch(setCurrentChat(chat))
    })
export default connect(null, mapDispatchToProps)(Chat);