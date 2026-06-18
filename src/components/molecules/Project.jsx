import { useState } from "react";
import styles from "../../stylesheets/Project.module.css";

const Project = ({ project }) => {
  const [modalAbierta, setModalAbierta] = useState(false);

  return (
    <>
      <div className={styles.project_card}>
        <img src={project.image} alt={project.title} />
        <div className={styles.project_card_content}>
          <h3 className={styles.titulo_card}>{project.title}</h3>
          <p className={styles.descripcion_card}>{project.description}</p>

          <div className={styles.project_tech}>
            {project.tech.map((t, i) => (
              <img key={i} src={t.icon} alt={t.name} title={t.name} />
            ))}
          </div>

          <div className={styles.project_links}>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className={styles.btn_repo}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.svg}
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Repositorio
              </a>
            )}

            {project.deploy ? (
              <a
                href={project.deploy}
                target="_blank"
                rel="noreferrer"
                className={styles.btn_deploy}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.svg}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Ver deploy
              </a>
            ) : (
              <button
                className={styles.btn_wip}
                onClick={() => setModalAbierta(true)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.svg}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Actualizando
              </button>
            )}
          </div>
        </div>
      </div>

      {modalAbierta && (
        <div
          className={styles.modal_overlay}
          onClick={() => setModalAbierta(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modal_icon}>🚧</div>
            <h3 className={styles.modal_title}>En construcción</h3>
            <p className={styles.modal_msg}>
              Este proyecto todavía no tiene deploy disponible. ¡Estamos
              trabajando en ello!
            </p>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className={styles.modal_repo_link}
              >
                Ver repositorio mientras tanto
              </a>
            )}
            <button
              className={styles.modal_close}
              onClick={() => setModalAbierta(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
