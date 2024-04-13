import Contact from "../Contact/Contact";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ usersContact }) => {

  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={css.ContactListUl}>
        {usersContact.map((usersContactItem) => (
          <Contact
            key={usersContactItem.id}
            id={usersContactItem.id}
            name={usersContactItem.name}
            number={usersContactItem.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
