import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
