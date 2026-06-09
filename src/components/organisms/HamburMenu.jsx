import React, { useState } from 'react';
import styles from '../../stylesheets/HamburMenu.module.css';
import { Link } from "react-router-dom";

function HamburMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles['menu-wrapper']}>
      
      <div 
        className={`${styles['hamburger-menu']} ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <div 
        className={`${styles.overlay} ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      ></div>

      <div className={`${styles.menu} ${isOpen ? 'open' : ''}`}>
        <ul className={styles['menu-opciones']}>
          <li><Link to='/' onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/webs/About" onClick={closeMenu}>Sobre mí</Link></li>
          <li><Link to="/webs/Contacto" onClick={closeMenu}>Contacto</Link></li>
          <li><Link to="/webs/Portfolio" onClick={closeMenu}>Portafolio</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default HamburMenu;