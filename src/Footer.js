import React, { useState } from 'react';
import './App.css';

function Footer() {
    return (
      <footer className="footer">
        <p>© 2024 Aplicação de demostração exemplos de UX. Todos os direitos reservados.</p>
        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    );
}


export default Footer;