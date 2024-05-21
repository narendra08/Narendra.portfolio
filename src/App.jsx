import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import {Menu} from './components/MenuPage/Menu';
import "./App.css"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newpage" element={<Menu />} />
    </Routes>
  );
};

export default App;
