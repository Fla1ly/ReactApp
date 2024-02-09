/* index.js */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './Pages/about';
import MemberPage from './Pages/member';
import reportWebVitals from './reportWebVitals';


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/member/:id" element={<MemberPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();