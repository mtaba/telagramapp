import Avatar from "../avatar/avatar.component"
import UserCaption from "../userCaption/userCaption.component"

function Contact= ({ contact})=>{

  function handleClick(){
     <Redirect to={{
    pathname: '/contactinfo',
    state: { id: '123' }
}} />
}

    return (
      <li onClick={handleClick}>
          <Avatar />
          <UserCaption title= {contact.first_name   } />
      </li>    
    )
}

export default Contact;