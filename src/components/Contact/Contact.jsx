import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";

import css from "./Contact.module.css";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const setIsOpen = useState(false);
    const setContactId = useState(null);
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={css.delButton}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;








