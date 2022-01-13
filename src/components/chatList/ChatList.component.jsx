

import Chat from '../chat/chat.component'
import CHAT_DATA from "../../asset/chats-data";
import './ChatList.styles.scss';

const ChatList=()=> {
  
  return (
    <ul className="chatlist">
      {CHAT_DATA.map((chat) => (
          <Chat key={chat.id} chat={chat} subtitle={chat.messages[0].text} />
      ))}
    </ul>
  );
};
export default ChatList;
