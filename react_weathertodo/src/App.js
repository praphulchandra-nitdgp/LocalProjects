import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";

import Weather from './components/weather';
import TodoWrapper from './components/TodoWrapper';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Weather/>} />
        <Route path="/TodoWrapper" element={<TodoWrapper/>} />
      </Routes>
      </BrowserRouter>
  </>
  );
};

export default App;
