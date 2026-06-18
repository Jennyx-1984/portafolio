import React from "react";
import styles from "../../stylesheets/IconGitHub.module.css";

function IconGitHub() {
  return (
      <nav className={styles.paragraph_GitHub}>
        <p className={styles.more}>Aquí puedes visitar más proyectos, trabajos y ejercicios</p>
        <a
          href="https://github.com/Jennyx-1984"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.github_wrap}>
          <div className={styles.github_ring}></div>
          <div className={`${styles.particle} ${styles.p1}`}></div>
          <div className={`${styles.particle} ${styles.p2}`}></div>
          <div className={`${styles.particle} ${styles.p3}`}></div>
          <div className={`${styles.particle} ${styles.p4}`}></div>
          <div className={`${styles.particle} ${styles.p5}`}></div>
          <div className={`${styles.particle} ${styles.p6}`}></div>
          <div className={`${styles.particle} ${styles.p7}`}></div>
          <div className={`${styles.particle} ${styles.p8}`}></div>
          <img
            src={require("../../assets/images/icons/logo_github.png")}
            alt="Mi GitHub"
            className={styles.repository}
          />
        </div>
      </a>
      <div className={styles.github_label}>ver repositorios</div>
      <div className={styles.github_underline}></div>
    </nav>
  );
}

export default IconGitHub;
