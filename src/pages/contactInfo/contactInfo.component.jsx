import {connect} from 'react-redux';
const ContactInfo=({currentContact})=>{
  const {first_name, last_name, phone_number,date} = currentContact; 
  return(
      <div>
        <p>First Name : {first_name} </p>
        <p>Last Name : {last_name} </p>
        <p>Phone Number : {phone_number} </p>
        <p>date : {date} </p>
      </div>
  )
}


const mapStateToProps = ({ contact }) => ({
  currentContact: contact.currentContact
});

export default connect( mapStateToProps)(ContactInfo);