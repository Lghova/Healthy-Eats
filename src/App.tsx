import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GroceryList from "./GroceryList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grocery-list" element={<GroceryList />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
