import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Page/contactUs/ContactUs";
import LandingPage from "./Page/landingPage/LandingPage";
import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
