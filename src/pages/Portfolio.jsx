import { useState } from "react";
import styles from "../stylesheets/Portfolio.module.css";
import { projects } from "../data/ProjectData";
import Project from "../components/molecules/Project";
import IconGitHub from "../components/atoms/IconGitHub";
import Pagination from "../components/atoms/Pagination";

const PROYECTOS_POR_PAGINA = 9;

const Portfolio = () => {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(projects.length / PROYECTOS_POR_PAGINA);

  const proyectosPagina = projects.slice(
    (paginaActual - 1) * PROYECTOS_POR_PAGINA,
    paginaActual * PROYECTOS_POR_PAGINA,
  );

  const handleCambiarPagina = (pagina) => {
    setPaginaActual(pagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.portfolio}>
      <h2>Mis Proyectos</h2>
      <div className={styles.projects_grid}>
        {proyectosPagina.length > 0 ? (
          proyectosPagina.map((p) => <Project key={p.id} project={p} />)
        ) : (
          <p>No hay proyectos todavía</p>
        )}
      </div>

      {totalPaginas > 1 && (
        <Pagination
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          onCambiarPagina={handleCambiarPagina}
        />
      )}

      <IconGitHub />
    </div>
  );
};

export default Portfolio;
