import styles from '../../stylesheets/Pagination.module.css';

function Pagination({ paginaActual, totalPaginas, onCambiarPagina }) {
  const getPages = () => {
    const pages = [];

    if (totalPaginas <= 5) {
      for (let i = 1; i <= totalPaginas; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    if (paginaActual > 3) pages.push('...');

    const start = Math.max(2, paginaActual - 1);
    const end = Math.min(totalPaginas - 1, paginaActual + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (paginaActual < totalPaginas - 2) pages.push('...');
    pages.push(totalPaginas);

    return pages;
  };

  return (
    <div className={styles.pagination_wrap}>
      <p className={styles.page_info}>
        mostrando proyectos {(paginaActual - 1) * 10 + 1}–{Math.min(paginaActual * 10, totalPaginas * 10)} de {totalPaginas * 10}
      </p>
      <div className={styles.pagination}>
        <button
          className={`${styles.page_btn} ${styles.arrow} ${paginaActual === 1 ? styles.disabled : ''}`}
          onClick={() => onCambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
          aria-label="Página anterior"
        >
          ‹
        </button>

        {getPages().map((page, i) =>
          page === '...' ? (
            <span key={`dots-${i}`} className={styles.page_dots}>···</span>
          ) : (
            <button
              key={page}
              className={`${styles.page_btn} ${page === paginaActual ? styles.active : ''}`}
              onClick={() => onCambiarPagina(page)}
              aria-label={`Ir a página ${page}`}
              aria-current={page === paginaActual ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}

        <button
          className={`${styles.page_btn} ${styles.arrow} ${paginaActual === totalPaginas ? styles.disabled : ''}`}
          onClick={() => onCambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
          aria-label="Página siguiente"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Pagination;