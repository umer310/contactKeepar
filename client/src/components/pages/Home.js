import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import ContactFilter from "../contacts/ContactFilter";
import ContactFrom from "../contacts/ContactFrom";
import Contacts from "../contacts/Contacts";

export const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslent-disable-next-line
  }, []);

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
