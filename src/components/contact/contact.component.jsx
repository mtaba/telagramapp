import {connect} from 'react-redux';
import Avatar from "../avatar/avatar.component"
import { useHistory} from 'react-router';

import UserCaption from "../userCaption/userCaption.component"
import setCurrentContact from '../../redux/contact/contact.actions';

import './contact.styles.scss'


function Contact({contact, setCurrentContact}){
  const history = useHistory();
  const {picture, first_name, last_name} = contact;
  
  function handleClick(){
    setCurrentContact(contact);
    history.push("/contactinfo");
}

    return (
      <li className="contact" onClick={handleClick}>
          <Avatar imageUrl={picture} />
          <UserCaption title= {first_name + " " + last_name } />
      </li>    
    )
}


const mapDispatchToProps = dispatch =>({
  setCurrentContact: contact => dispatch(setCurrentContact(contact))
  })
export default connect(null, mapDispatchToProps)(Contact);