import styles from "../../stylesheets/Project.module.css";

const Project = ({ project }) => {
  return (
    <div className={styles.project_card}>
      <img src={project.image} alt={project.title} />{" "}
      <div className={styles.project_card_content}>
        <h3 className={styles.titulo_card}>{project.title}</h3>
        <p className={styles.descripcion_card}>{project.description}</p>

        <div className={styles.project_tech}>
          {project.tech.map((t, i) => (
            <img src={t.icon} alt={t.name} />
          ))}
        </div>

        <div className={styles.project_links}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={styles.demo}
            >
              Proyecto
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
