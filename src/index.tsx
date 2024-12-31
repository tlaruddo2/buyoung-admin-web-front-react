import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './component/nav/nav';
import { ConditionManagement } from './pages/condition-management/condition-management';
import { Home } from './pages/home';
import { ProductionLog } from './pages/production-log/production-log';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/condition-management" element={<ConditionManagement/>}/>
        <Route path="/production-log" element={<ProductionLog/>}/>
      </Routes>
    </BrowserRouter>

);
