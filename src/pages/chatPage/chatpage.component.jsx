import Header from '../../components/chatHeader/chatHeader.component';
import MessageList from "../../components/messageList/messageList.component";

import './chatpage.styles.scss';

const ChatPage = ()=>{
  return (
  <div className="chatpage">
    <div className="container">
     <Header />
     <MessageList />
     </div>
  </div>
  )
}

export default ChatPage;