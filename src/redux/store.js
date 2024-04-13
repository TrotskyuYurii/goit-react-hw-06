import { createStore, combineReducers } from "redux";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";


const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filtersSlice
})

export const store = createStore(rootReducer);