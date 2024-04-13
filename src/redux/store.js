import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

//persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
//persist

//persist
const contactsPeristConfig = {
  key: "contactsitems",
  storage,
  whitelist: ["items"],
};
//persist

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPeristConfig, contactsReducer),
    filters: filtersReducer
  },

  //persist
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //persist

});

//persist
export const persistor = persistStore(store);
//persist