
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

export function App() {
  const dispatch = useDispatch();
  const usersContacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

 

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredContacts = usersContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox onChangeFilter={onChangeFilter} />
      <ContactList
        usersContact={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
