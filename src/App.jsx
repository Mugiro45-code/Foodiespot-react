import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Healthy from "./components/Healthy";
import Breakfast from "./components/Breakfast";
import Desserts from "./components/Desserts";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthy" element={<Healthy />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>
    </Router>
  );
}

export default App;
