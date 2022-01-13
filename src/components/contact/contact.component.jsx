import {connect} from 'react-redux';
import Avatar from "../avatar/avatar.component"
import { useHistory} from 'react-router';

import UserCaption from "../userCaption/userCaption.component"
import setCurrentContact from '../../redux/contact/contact.actions';

import './contact.styles.scss'


function Contact({contact, setCurrentContact}){
  const history = useHistory();
  
  function handleClick(){
    setCurrentContact(contact);
    history.push("/contactinfo");
}

    return (
      <li className="contact" onClick={handleClick}>
          <Avatar />
          <UserCaption title= {contact.first_name + " " + contact.last_name   } />
      </li>    
    )
}


const mapDispatchToProps = dispatch =>({
  setCurrentContact: contact => dispatch(setCurrentContact(contact))
  })
export default connect(null, mapDispatchToProps)(Contact);