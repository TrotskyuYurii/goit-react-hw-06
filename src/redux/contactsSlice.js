const INITIAL_STATE = {
    usersContacts: [
        { id: "id-5", name: "1Rosie Simpson", number: "459-12-56" },
        { id: "id-6", name: "1Hermione Kline", number: "443-89-12" },
        { id: "id-7", name: "1Eden Clements", number: "645-17-79" },
        { id: "id-8", name: "1Annie Copeland", number: "227-91-26" },
      ]
}

export const contactsSlice = (state = INITIAL_STATE, action) => {
    return state;
    // switch (action.type) {
    //     default:
    //         return state;
    // }
}