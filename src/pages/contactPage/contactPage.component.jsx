import { useState } from "react";
import { connect } from "react-redux";
import Contact from "../../components/contact/contact.component";

import "./contactPage.styles.scss";

function ContactPage({ contacts }) {
  return (
    <div className="contact-page">
      <ul>
        {contacts.map((contact,index) => (
          // <div className="contact">
            <Contact key={index} contact={contact} />
          // </div>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ contact }) => ({
  contacts: contact.contacts,
});

export default connect(mapStateToProps)(ContactPage);
