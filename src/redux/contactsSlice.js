import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    usersContacts: []
  };
  

const contactsSlice = createSlice({
  // Ім'я слайсу - формує префікс для генераторів екшенів
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addcontact(state, action) {
      state.usersContacts.push(action.payload);
},
    deleteConstact(state, action) {
      state.usersContacts = state.usersContacts.filter((contact) => contact.id !== action.payload);
},
  },
});

// Генератори екшенів
export const { addcontact, deleteConstact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
