import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth.js';
import { PostDetail } from './components/PostDetail/PostDetail';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exaxt element={<Navigate to="/posts" replace />} />
          <Route path="/posts" exaxt element={<Home />} />
          <Route path="/posts/search" exaxt element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/auth" exaxt element={!user ? <Auth /> : <Navigate to="/posts" replace />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
