import React from "react";
import Contacts from "../contacts/Contacts";

export const Home = () => {
  return (
    <div className="grid-2">
      <div>{/* {contactFrom} */}</div>
      <div>{<Contacts />}</div>
    </div>
  );
};
