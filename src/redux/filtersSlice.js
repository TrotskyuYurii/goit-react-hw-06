import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filter: ''
}


const filtersSlice = createSlice({
    // Ім'я слайсу - формує префікс для генераторів екшенів
    name: "filter",
    // Початковий стан редюсера слайсу
    initialState: INITIAL_STATE,
    // Об'єкт редюсерів
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

// Генератори екшенів
export const { setFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;