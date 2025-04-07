import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="landing-cont">
      <div className="hero">
        <h1 className="hero-title">Unlock Your Potential</h1>
        <p className="hero-subtitle">Learn more efficiently, achieve more with FocusFlow</p>
        <Link to="/signup" className="cta-btn">Get Started</Link>
      </div>
    </div>
  );
}

export default Home;
