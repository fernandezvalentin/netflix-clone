import React, { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  activeView: string;
  onViewChange: (view: 'home' | 'series' | 'movies') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, onViewChange }) => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => onViewChange('home')}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
        <div className="nav__links">
          <span 
            className={activeView === 'home' ? 'active' : ''} 
            onClick={() => onViewChange('home')}
          >Inicio</span>
          <span 
            className={activeView === 'series' ? 'active' : ''} 
            onClick={() => onViewChange('series')}
          >Series</span>
          <span 
            className={activeView === 'movies' ? 'active' : ''} 
            onClick={() => onViewChange('movies')}
          >Películas</span>
          <span>Novedades populares</span>
          <span>Mi lista</span>
        </div>
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
