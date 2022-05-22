// import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashbord from "./components/Admin/Dashbord";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/admin" element={<Dashbord />}>
          <Route />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
