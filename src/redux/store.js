import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

//persist - імопртуємо необхідні бібліотеки persist redux
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

//persist - вказуємо які редюсери нам потрібно зберегти в локальному сховищі
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

  //persist - конфігурація middleware для redux-persist
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //persist

});

//persist - єкспортуємо store з redux-persist
export const persistor = persistStore(store);
//persist