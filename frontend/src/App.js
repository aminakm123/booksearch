import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./components/screens/Books";
import CreateBook from "./components/screens/CreateBook";
// import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '20px', color: 'rgb(19 125 78)',textAlign: 'center' }}>Book Store</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/create-book/" element={<CreateBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;