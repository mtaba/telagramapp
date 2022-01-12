import "./header.styles.scss";
import Avatar from "../avatar/avatar.component";
import {connect} from 'react-redux';

//params :  current user
const Header = ({currentChat}) => {
  console.log(currentChat);
  return <div className="header">
    <Avatar />
  </div>;
};

const mapStateToProps = state=>({
  curerntChat: state.chat.currentChat,
})

export default connect(mapStateToProps)(Header);