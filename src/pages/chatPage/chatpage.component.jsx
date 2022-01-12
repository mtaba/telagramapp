import Header from '../../components/header/header.component';
import MessageList from "../../components/messageList/messageList.component";
import PostMessageForm from '../../components/postMessageForm/postMessageForm.component';
import './chatpage.styles.scss';

const ChatPage = ()=>{
  return (
  <div className="">
     <Header />
     <MessageList />
     <PostMessageForm />

  </div>
  )
}

export default ChatPage;