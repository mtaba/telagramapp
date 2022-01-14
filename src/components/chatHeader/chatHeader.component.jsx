import {connect} from 'react-redux';
import "./chatHeader.styles.scss";
import Avatar from "../avatar/avatar.component";
import UserCaption from '../userCaption/userCaption.component';

//params :  currentChat
const ChatHeader = ({currentChat}) => {
  const {picture, messages} = currentChat
  return <div className="chat-header">
    <Avatar imageUrl={picture} />
    <UserCaption title={messages[0].from} />
  </div>;
};

const mapStateToProps = ({ chat }) => ({
  currentChat: chat.currentChat
});

export default connect( mapStateToProps)(ChatHeader);