import { createSlice } from '@reduxjs/toolkit';

const citySlice = createSlice({
    name: 'city',
    initialState: "Luckland",
    reducers: {
        updateCity: (state, action)=> {
            console.log(state);
            state = { name: action.payload };
            return state;
        }
    },
});

export const { updateCity } = citySlice.actions;

export default citySlice.reducer;
