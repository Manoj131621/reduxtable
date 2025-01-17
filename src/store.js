import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from "./reducers/formDataReducer"
import sampleDataReducer from "./reducers/sampleDataReducer"

const store = configureStore({ 
    reducer: {
        formData: formDataReducer,
        sampleData: sampleDataReducer,
    } ,
    devTools:true,
});

export default store;