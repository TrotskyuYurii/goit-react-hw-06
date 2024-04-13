import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";


const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filtersSlice
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);