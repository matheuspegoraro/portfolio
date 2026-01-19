import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="profile-section">
          <h1 className="name">Matheus Pegoraro</h1>
          <p className="title">Senior Full Stack Developer</p>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            Limeira, São Paulo, Brazil
          </p>
        </div>
        
        <div className="contact-grid">
          <a href="mailto:matheuspegoraro2017@gmail.com" className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
          <a href="tel:+5519989709625" className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+55 19 98970-9625</span>
          </a>
          <a href="https://www.linkedin.com/in/matheus-pegoraro/" target="_blank" rel="noreferrer" className="contact-item">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://matheuspegoraro.github.io/portfolio/" target="_blank" rel="noreferrer" className="contact-item">
            <i className="fas fa-globe"></i>
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
