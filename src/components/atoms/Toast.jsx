import React, { useEffect } from "react";
import styles from "../../stylesheets/Toast.module.css";

function Toast({ tipo, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, tipo === "exito" ? 4000 : 5000);
    return () => clearTimeout(timer);
  }, [tipo, onClose]);

  const esExito = tipo === "exito";

  return (
    <div
      className={`${styles.toast} ${esExito ? styles.toast_exito : styles.toast_error}`}
    >
      <div
        className={`${styles.toast_icon} ${esExito ? styles.icon_exito : styles.icon_error}`}
      >
        {esExito ? "✓" : "✕"}
      </div>
      <div className={styles.toast_body}>
        <p className={styles.toast_title}>
          {esExito ? "¡Mensaje enviado!" : "Error al enviar"}
        </p>
        <p className={styles.toast_msg}>
          {esExito
            ? "Te responderé en menos de 24h."
            : "Inténtalo de nuevo o escríbeme a LinkedIn."}
        </p>
        <div className={styles.toast_progress} />
      </div>
      <button
        className={styles.toast_close}
        onClick={onClose}
        aria-label="Cerrar notificación"
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
