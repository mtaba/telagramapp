import "./header.styles.scss";
import Avatar from "../avatar/avatar.component";
import {connect} from 'react-redux';

//params :  current user
const Header = (props) => {
  console.log('props in header',props);
  return <div className="header">
    <Avatar />
  </div>;
};

const mapStateToProps = ({ chat }) => ({
  currentChat: chat.currentChat
});

export default connect( mapStateToProps)(Header);