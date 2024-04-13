import { createStore, combineReducers } from "redux";
import { contactsSlice } from "./contactsSlice";


const rootReducer = combineReducers({
  Contact: contactsSlice
})

export const store = createStore(rootReducer);