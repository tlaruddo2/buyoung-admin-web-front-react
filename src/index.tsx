import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './component/nav/nav';
import Home from './App';
import { Menu1 } from './pages/menu1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu1" element={<Menu1/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);