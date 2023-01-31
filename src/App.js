import './App.css';
import Home from './Home.js';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './Description';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/description" element={<Description/>} />
        </Routes>
    </Router>
  );
}

export default App;
