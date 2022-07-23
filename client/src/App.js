import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth.js';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exaxt element={<Home />} />
          <Route path="/auth" exaxt element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
