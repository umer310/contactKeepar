import React from "react";
import ContactFilter from "../contacts/ContactFilter";
import ContactFrom from "../contacts/ContactFrom";
import Contacts from "../contacts/Contacts";

export const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactFrom />
      </div>
      <div>
        <ContactFilter />
        {<Contacts />}
      </div>
    </div>
  );
};
