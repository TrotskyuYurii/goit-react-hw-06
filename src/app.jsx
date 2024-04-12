import { useEffect, useState } from "preact/hooks";
import "./app.css";

import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

export function App() {
  // Первинна ініціалізація списку контактів
  const usersContactInitial = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // Стан для збереження всіх контактів
  const [usersContact, setusersContact] = useState(() => {
    const dateFromStorage = localStorage.getItem("usersContact");
    if (!dateFromStorage) {
      return usersContactInitial;
    } else {
      return JSON.parse(dateFromStorage);
    }
  });

  // Фільтр. первинне значення
  const [filter, setFilter] = useState("");

  // Фільтр. зміна фільтрації
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  // Збереження у локальному сховищі
  useEffect(() => {
    window.localStorage.setItem("usersContact", JSON.stringify(usersContact));
  }, [usersContact]);

  //Видалення контактів
  const onDeleteContact = (contactId) => {
    setusersContact((prevContact) =>
      prevContact.filter((user) => user.id !== contactId)
    );
  };

  //Додавання контакта
  const onAddContact = (values) => {
    const newContact = {
      name: values.userName,
      number: values.userNumber,
      id: nanoid(),
    };

    setusersContact((prevState) => [...prevState, newContact]);
  };

  const filteredContacts = usersContact.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
console.log('filter:',filter,'res:',filteredContacts);
// setusersContact(filteredContacts);

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
