import { useState } from "react";
import styles from "../../stylesheets/Logros.module.css";
import { certificados } from "../../data/CertData";
import Lightbox from "../molecules/Lightbox";

function Logros() {
  const [seleccionado, setSeleccionado] = useState(null);

  const abrirLightbox = (cert) => setSeleccionado(cert);
  const cerrarLightbox = () => setSeleccionado(null);

  const navegar = (dir) => {
    const idx = certificados.findIndex((c) => c.id === seleccionado.id);
    const siguiente = (idx + dir + certificados.length) % certificados.length;
    setSeleccionado(certificados[siguiente]);
  };

  return (
    <main className={styles.logros_contenedor}>
      <h2>Logros y certificados</h2>
      <p className={styles.subtitulo}>
        Formación complementaria y certificaciones obtenidas.
      </p>

      <div className={styles.gallery_grid}>
        {certificados.map((cert) => (
          <div
            key={cert.id}
            className={styles.cert_card}
            onClick={() => abrirLightbox(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && abrirLightbox(cert)}
            aria-label={`Ver certificado: ${cert.titulo}`}
          >
            <div className={styles.cert_thumb}>
              <img src={cert.imagen} alt={cert.titulo} />
              <div className={styles.cert_overlay}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
            <div className={styles.cert_body}>
              <span className={styles.cert_año}>{cert.año}</span>
              <p className={styles.cert_titulo}>{cert.titulo}</p>
              <p className={styles.cert_entidad}>{cert.entidad}</p>
            </div>
          </div>
        ))}
      </div>

      {seleccionado && (
        <Lightbox
          cert={seleccionado}
          onClose={cerrarLightbox}
          onNav={navegar}
        />
      )}
    </main>
  );
}

export default Logros;