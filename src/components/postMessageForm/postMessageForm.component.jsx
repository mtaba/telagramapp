import React , {useState} from 'react';
import {connect} from 'react-redux';

import addMessage from '../../redux/message/message.actions'

 function PostMessageForm(props){
  console.log("props:",props);
     const [messageText , setMessgeText] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log(messageText);
        
    }
  return(
      <div>
          <form onSubmit={handleSubmit} >
          <input name='messageText' value={messageText} placeholder="messages" onChange={e=>setMessgeText(e.target.value)}/>
          <button type="submit" >Submit</button>
          </form>
         
      </div>
  )
 }

 const mapDispatchToProps = dispatch =>({
    addMessage: message => dispatch(addMessage(message))
    })
export default connect(null ,mapDispatchToProps )(PostMessageForm);