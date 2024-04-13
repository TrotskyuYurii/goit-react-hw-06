import { createStore, combineReducers } from "redux";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";


const rootReducer = combineReducers({
  contact: contactsSlice,
  filter: filtersSlice
})

export const store = createStore(rootReducer);