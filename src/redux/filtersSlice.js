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
        changeFilter (state, action) {
            state.filter = action.payload;
        },
    },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;