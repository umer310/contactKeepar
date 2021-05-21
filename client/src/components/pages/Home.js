import React from "react";
import ContactFrom from "../contacts/ContactFrom";
import Contacts from "../contacts/Contacts";

export const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactFrom />
      </div>
      <div>{<Contacts />}</div>
    </div>
  );
};
