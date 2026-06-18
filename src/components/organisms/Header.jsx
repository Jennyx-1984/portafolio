import React from "react";
import styles from "../../stylesheets/Header.module.css";
import { useNavigate } from "react-router-dom";
import HamburMenu from "./HamburMenu";

function Header() {
  const navigate = useNavigate();
  const buttons = [
    { label: "Inicio", icon: "home", path: "/" },
    { label: "Sobre mi", icon: "info", path: "/about" },
    { label: "Contacto", icon: "email", path: "/contact" },
    { label: "Proyectos", icon: "web", path: "/projects" },
    { label: "Logros", icon: "award", path: "/logros" },
  ];

  return (
    <div className={styles.cabecera_contenedor}>
      <h1 className={styles.cabecera}>Cros.dev</h1>
      <h3 className={styles.cabecera2}>DOMinando el diseño</h3>
      <nav className={styles.menu_principal}>
        {buttons.map((btn, index) => (
          <button
            key={index}
            type="button"
            title={btn.label}
            onClick={() => navigate(btn.path)}
            className={styles.boton}
          >
            <span>{btn.label}</span>
            <span
              className={styles.material_symbols_outlined}
              aria-hidden="true"
            >
              {btn.icon}
            </span>
            <svg viewBox="0 0 300 300" aria-hidden="true">
              <g>
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">{btn.label}</textPath>
                </text>
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath" startOffset="50%">
                    {btn.label}
                  </textPath>
                </text>
              </g>
            </svg>
          </button>
        ))}
      </nav>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 300 300"
        width="0"
        height="0"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0"
          />
        </defs>
      </svg>
      <HamburMenu />
    </div>
  );
}

export default Header;
