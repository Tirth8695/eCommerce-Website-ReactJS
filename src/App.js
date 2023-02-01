import './App.css';
import Home from './Home.js';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './Description';
import Cart from './Cart';
import AccountCreation from './AccountCreation';
import Login from './Login';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/description" element={<Description/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/accountCreation" element={<AccountCreation/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
    </Router>
  );
}

export default App;
