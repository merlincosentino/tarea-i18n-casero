import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nCaseroEs } from './i18nCasero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nCaseroEn } from './I18nCaseroEn';
import { Home } from './Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="es" element={<I18nCaseroEs />} />
        <Route path="en" element={<I18nCaseroEn />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>



)
