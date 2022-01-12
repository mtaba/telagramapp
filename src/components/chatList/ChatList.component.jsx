

import Chat from '../chat/chat.component'
import CHAT_DATA from "../../asset/chats-data";
import './ChatList.styles.scss';

const ChatList=()=> {
  
  return (
    <ul className="chatlist">
      {CHAT_DATA.map((chat) => (
          <Chat key={chat.id} chat={chat} />
      ))}
    </ul>
  );
};
export default ChatList;
