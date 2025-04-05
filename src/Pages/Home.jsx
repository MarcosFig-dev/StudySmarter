import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="landing-cont">
      <div className="hero">
        <h1 className="hero-title">Study Smarter</h1>
        <p className="hero-subtitle">Get More For Less with StudySmart</p>
        <Link to="/signup" className="cta-btn">Sign up for free</Link>
      </div>
    </div>
  );
}

export default Home;
