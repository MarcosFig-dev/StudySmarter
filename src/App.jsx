import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;