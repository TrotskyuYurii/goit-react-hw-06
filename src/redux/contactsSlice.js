// Оновлений Redux-редюсер
const INITIAL_STATE = {
    usersContacts: [],
    filter: "",
  };
  
  export const contactsSlice = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...state,
          usersContacts: [...state.usersContacts, action.payload],
        };
      case "DELETE_CONTACT":
        return {
          ...state,
          usersContacts: state.usersContacts.filter((contact) => contact.id !== action.payload),
        };
      case "SET_FILTER":
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };