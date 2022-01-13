import {connect} from 'react-redux';
import "./header.styles.scss";
import Avatar from "../avatar/avatar.component";
import UserCaption from '../userCaption/userCaption.component';

//params :  currentChat
const Header = ({currentChat}) => {
  return <div className="header">
    <Avatar />
    <UserCaption title={currentChat.messages[0].from} />
  </div>;
};

const mapStateToProps = ({ chat }) => ({
  currentChat: chat.currentChat
});

export default connect( mapStateToProps)(Header);