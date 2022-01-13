import { useState } from "react";
import { connect } from "react-redux";

import Avatar from "../../components/avatar/avatar.component";
import UserCaption from "../../components/userCaption/userCaption.component";

import "./contactPage.styles.scss";

function ContactPage({ contacts }) {
  return (
    <div className="contact-page">
      <ul>
        {contacts.map((contact) => (
          <div className="contact">
            <Avatar />
            <UserCaption title={contact.first_name + " " + contact.last_name} />
          </div>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ contact }) => ({
  contacts: contact.contacts,
});

export default connect(mapStateToProps)(ContactPage);
