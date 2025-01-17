import React  from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage";
import DetailsPage from "./components/DetailsPage";
import "./App.css";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<FormPage title="Hackathon Registration" />} />
            <Route path="/detailspage" element={<DetailsPage title="User Details" />} />
        </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
