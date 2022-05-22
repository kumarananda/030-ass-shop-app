import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashbord from "./components/Dashbord/Dashbord";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Dashbord />
      <Routes>
        <Route path="/" element={<Dashbord />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
