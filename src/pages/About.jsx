import React from "react";
import styles from "../stylesheets/About.module.css";
import RadialMenu from "../components/molecules/RadialMenu";

function About() {

  const skills = [
    { label: "React", main: true },
    { label: "Spring Boot", main: true },
    { label: "JavaScript" },
    { label: "Java" },
    { label: "PHP" },
    { label: "Python" },
    { label: "C#" },
    { label: "SQL" },
    { label: "Phaser" },
    { label: "WordPress" },
  ];

  return (
    <div className={styles.about_contenedor}>
      <h2>Sobre mi</h2>;
      <div className={styles.about_info}>
        <p className={styles.about}>
          Soy
          <span className={styles.nombre} style={{ whiteSpace: "pre" }}>
            Jennifer
          </span>
          , full stack developer junior con base en Barcelona. He hecho un
          cambio de rumbo profesional porque me apasiona la tecnología y
          sobretodo transformar ideas en interfaces intuitivas y visualmente
          atractivas. Trabajo principalmente con React y Spring Boot pero me adapto
          a cualquier otro lenguaje de programación (antiguamente me apasionaba C# y PHP), 
          y disfruto cada etapa del proceso: desde el diseño hasta la implementación. 
          Me dedico a realizar proyectos en PHASER, aplicaciones web, y páginas con 
          diseño intuitivo, accesiblidad, y responsive. Aparte colaboro con proyectos 
          sin ánimo de
          lucro en servidores de videojuegos MMORPG. Después de formarme en desarrollo web y
          trabajar en varios proyectos personales, descubrí que lo que más me
          motiva es crear experiencias digitales que realmente conecten con las
          personas. Me encanta aprender nuevas tecnologías, cuidar los detalles
          y mantenerme al día con las tendencias del sector. Mi experiencia ha
          sido como becaria realizando una página web en la Asociación de
          Celíacos de Catalunya, un programa de contabilidad para una escuela de
          idiomas, y ayudar a mejorar y actualizar los contenidos de las webs
          del Centro de Estudios Africanos e Interculturales en Wordpress.
          Actualmente estoy abierta a colaborar en proyectos que valoren la
          creatividad, la accesibilidad, el buen diseño y las buenas prácticas. Si tienes una idea que quieres llevar a la web, ¡hablemos!
        </p>
      </div>
      <div className={styles.conocimientos_contenedor}>
        <RadialMenu />
        <div className={styles.chips_strip}>
        {skills.map((s) => (
          <span
            key={s.label}
            className={`${styles.chip} ${s.main ? styles.chip_main : ""}`}
          >
            {s.label}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}

export default About;
