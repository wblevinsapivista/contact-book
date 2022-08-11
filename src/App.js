import React from "react";

import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<AddContact></AddContact>}></Route>
        <Route
          path="/edit/:id"
          element={<EditContact></EditContact>}
        ></Route>{" "}
        */}
      </Routes>
    </div>
  );
};

export default App;
