import "./header.styles.scss";
import Avatar from "../avatar/avatar.component"

//params :  current user
const Header = () => {
  return <div className="header">
    <Avatar />
  </div>;
};


export default Header;