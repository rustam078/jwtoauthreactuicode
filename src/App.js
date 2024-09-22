// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} /> 
        </Routes>
      </Router>
  );
}

export default App;
