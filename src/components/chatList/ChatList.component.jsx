import Avatar from "../avatar/avatar.component";
import UserCaption from "../userCaption/userCaption.component";
import CHAT_DATA from "../../asset/chats-data";
import './ChatList.styles.scss';

const ChatList = () => {
  return (
    <ul className="chatlist">
      {CHAT_DATA.map((chat) => (
        <li key={chat.id} className="chatlist-chat">
          <Avatar />
          <UserCaption  messages={chat.messages} />
        </li>
      ))}
    </ul>
  );
};
export default ChatList;
