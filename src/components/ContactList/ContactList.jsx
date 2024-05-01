import { useSelector } from "react-redux";
import { selectFilteredContacts, selectError, selectIsLoading, } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";


import Loader from "../Loader/Loader";
import css from './ContactList.module.css'

const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts);
  console.log('Filtered Contacts:', filteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
  return (
    <>
      <ul className={css.contactList}>
      {filteredContacts.length === 0 ? (
        <p className={css.text}>Let's start making your own contacts!</p>
      ) : (
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })
      )}
    </ul>
    </>
  );
};
export default ContactList;



