import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setValueFilter(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setValueFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
