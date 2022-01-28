import "./App.css";
import Container from "./Container";
import React, { useState } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mcontainer from "./Mcontainer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Container />} />
          <Route path="/homepage" element={<Mcontainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
