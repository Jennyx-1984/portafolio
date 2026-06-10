import React from "react";
import styles from "../../stylesheets/Intro.module.css";
import ButtonCV from "../atoms/ButtonCV";
import { ReactTyped } from "react-typed";
import AvatarFrame from "../atoms/AvatarFrame";

function Intro() {
  const disponible = true;

  return (
    <div className={styles.presentacion_contenedor}>
      <div className={styles.cabecera_saludo}>
        <div className={styles.texto_saludo}>
          ¡Hola! Mi nombre es&nbsp;
          <span className={styles.nombre} style={{ whiteSpace: "pre" }}>
            &nbsp; Jennifer Cros
          </span>{" "}
          y soy&nbsp;
          <ReactTyped
            strings={[
              "",
              "Full Stack Web Developer",
              "Tester",
              "Scripter",
              "Técnico de Desarrollo de Aplicaciones Informáticas",
              "Administradora de Sistemas Informáticos",
              "Analista de redes",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
            style={{ color: "red", paddingBottom: "20px" }}
          />
        </div>
        <div className={styles.badge}>
          <div className={styles.avail_badge}>
            <span className={styles.avail_dot}></span>
            {disponible
              ? "Disponible para proyectos y trabajar"
              : "Actualmente ocupada"}
          </div>
        </div>
      </div>

      <div className={styles.contexto}>
        <p className={styles.texto}>
          Soy programadora full stack con un ojo puesto en el código y el otro
          en el diseño. Vengo de un cambio de rumbo que fue la mejor decisión
          que he tomado — y cada proyecto que construyo lo demuestra.
        </p>
        <ButtonCV />
      </div>
      <div className={styles.avatar}>
        <AvatarFrame />
      </div>
    </div>
  );
}

export default Intro;
