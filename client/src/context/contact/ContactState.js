import React, { useReducer } from "react";
import uuid from "uuid";
import { contactReducer } from "./contactReducer";
import ContactContext from "./contactContext";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "umer",
        email: "umer@gmail.com",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  //Delete Contact

  //set Current Contact

  // clear Current Contact

  //Update contact

  //fiter Contacts

  //clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.Children}
    </ContactContext.Provider>
  );
};

export default ContactState;
