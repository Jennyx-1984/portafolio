import React, { useState } from "react";
import styles from "../../stylesheets/HamburMenu.module.css";
import { Link } from "react-router-dom";

function HamburMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.hamburger_menu} onClick={toggleMenu}>
        {isOpen ? (
          <svg
            className={styles.close_icon}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </>
        )}
      </div>

      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>

      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu_opciones}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/logros" onClick={closeMenu}>
              Logros
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburMenu;
