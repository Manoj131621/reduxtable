import { createSlice } from "@reduxjs/toolkit";

const initialData = [
    { name: "John Doe", username: "johndoe", education:'Masters', email: "john@example.com", mobileNumber: "1234567890",},
    { name: "Manoj Kumar Seeta", username: "Manoj111", education:'Masters', email: "manoj@example.com", mobileNumber: "9876543210",},
    { name: "Beulah B", username: "Beulah", education:'Bachelors', email: "Beulah@example.com", mobileNumber: "7654321098",},
    { name: "Abraham A", username: "Abraham", education:'Masters', email: "Abraham@example.com", mobileNumber: "8765432109",},
]
const sampleDataSlice = createSlice({
    name: "sampleData",
    initialState: initialData,
    reducers:{
        addSampleData: (state, action) => {
            state.push(action.payload);
          },
    },
});

export const { addSampleData } = sampleDataSlice.actions
export default sampleDataSlice.reducer;