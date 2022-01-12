
import ChatList from "../../components/chatList/ChatList.component";
import "./chatListpage.styles.scss";

const ChatListPage = () => {
  return (
    <div className="chat-list-page">
      <div className="column-left">
      <ChatList />
      </div>
      <div className="column-right">
      </div>
    </div>
    
  );
};
export default ChatListPage;
