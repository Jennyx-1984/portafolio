import styles from "../stylesheets/Portfolio.module.css";
import { projects } from "../data/ProjectData";
import Project from "../components/molecules/Project";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2>Mis Proyectos</h2>
      <div className={styles.projects_grid}>
        {projects.length > 0 ? (
          projects.map((p) => <Project key={p.id} project={p} />)
        ) : (
          <p>No hay proyectos todavía</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
