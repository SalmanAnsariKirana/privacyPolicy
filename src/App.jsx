import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivacyPolicy } from './components/privacyPolicy';
import DataDeletionPolicy from './components/dataDeletionPolicy';

function App() {
  return (
    <Router>
      <div className="App">        
        <Routes>
          <Route path="/" element={<PrivacyPolicy />} />
          <Route path="/data-deletion" element={<DataDeletionPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
