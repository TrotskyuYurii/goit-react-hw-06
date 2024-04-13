import "./app.css";

import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addcontact, deleteconstact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";


export function App() {


  const dispatch = useDispatch();
  const usersContact = useSelector(state => state.contacts.usersContacts);
  const filter = useSelector(state => state.filter.filter);


  // // Збереження у локальному сховищі
  // useEffect(() => {
  //   window.localStorage.setItem("usersContact", JSON.stringify(usersContact));
  // }, [usersContact]);


  //Додавання контакта
  const onAddContact = (values) => {

    const newContact = {
      name: values.userName,
      number: values.userNumber,
      id: nanoid(),
    };
    dispatch(addcontact(newContact));
  };


  //Видалення контактів
  const onDeleteContact = (contactId) => {
    dispatch(deleteconstact(contactId));
  };


  // Фільтр. зміна фільтрації
  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = usersContact ? usersContact.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ) : [];




  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox onChangeFilter={onChangeFilter} />
      <ContactList
        usersContact={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
