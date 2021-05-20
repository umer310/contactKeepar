import React, { Fragment, useContext } from "react";
import ContactState from "../../context/contact/ContactState";

const Contacts = () => {
  const contactContext = useContext(ContactState);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <h3>{contact.name}</h3>
      ))}
    </Fragment>
  );
};
export default Contacts;
