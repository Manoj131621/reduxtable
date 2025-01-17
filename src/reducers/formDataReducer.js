import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
    name: 'formData',
    initialState: [],
    reducers: {
        adduserData: (state,action) => {
            state.push(action.payload);
        }
    }
})
export const { adduserData } = formDataSlice.actions;
export default formDataSlice.reducer;