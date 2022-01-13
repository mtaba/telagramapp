import {connect} from 'react-redux';
import "./header.styles.scss";
import Avatar from "../avatar/avatar.component";
import UserCaption from '../userCaption/userCaption.component';

//params :  currentChat
const Header = ({currentChat}) => {
  return <div className="header">
    <Avatar />
    <UserCaption messages={currentChat.messages} />
  </div>;
};

const mapStateToProps = ({ chat }) => ({
  currentChat: chat.currentChat
});

export default connect( mapStateToProps)(Header);