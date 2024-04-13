import { useEffect, useState } from "preact/hooks";
import "./app.css";

import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useSelector, useDispatch } from "react-redux";

export function App() {


  const dispatch = useDispatch();
  const usersContact = useSelector(state => state.contacts.usersContacts);
  const filter = useSelector(state => state.filter.filter);


  // Збереження у локальному сховищі
  useEffect(() => {
    window.localStorage.setItem("usersContact", JSON.stringify(usersContact));
  }, [usersContact]);


  //Додавання контакта
  const onAddContact = (values) => {

    const newContact = {
      name: values.userName,
      number: values.userNumber,
      id: nanoid(),
    };

    const action = { type: "ADD_CONTACT", payload: newContact, }
    dispatch(action);
  };

  //Видалення контактів
  const onDeleteContact = (contactId) => {
    const action = { type: "DELETE_CONTACT", payload: contactId, }
    dispatch(action);
  };



  // Фільтр. зміна фільтрації
  const onChangeFilter = (event) => {
    const action = { type: "SET_FILTER", payload: event.target.value, }
    dispatch(action);
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
