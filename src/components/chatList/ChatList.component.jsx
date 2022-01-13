import { connect } from 'react-redux';
import Chat from '../chat/chat.component'
import './ChatList.styles.scss';

const ChatList=({chats})=> {
  console.log("chat List",chats);
  return (
    <ul className="chatlist">
      {chats.map((chat) => (
          <Chat key={chat.id} chat={chat} subtitle={chat.messages[0].text} />
      ))}
    </ul>
  );
};
const mapStateToProps = ({ chat }) => ({
  chats: chat.chats,
});

export default connect(mapStateToProps)(ChatList);
