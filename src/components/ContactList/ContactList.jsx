import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ usersContact, onDeleteContact }) => {
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
