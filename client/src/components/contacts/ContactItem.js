import React from "react";

const ContactItem = ({ id, name, email, phone, type }) => {
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{name}</h3>
    </div>
  );
};
export default ContactItem;
