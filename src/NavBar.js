import React, { useState } from 'react';
import './App.css'; 

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>UX Exemplos</h1>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </div>
        <button id="menu-Button" className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? 'Fechar' : 'Menu'}
        </button>
      </nav>
    );
  }


export default NavBar;