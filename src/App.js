import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClaudiaLandingPage from './pages/ClaudiaLandingPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClaudiaLandingPage />} />
        {/* Adicione rotas adicionais conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;