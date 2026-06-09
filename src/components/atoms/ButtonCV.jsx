import React from "react";
import styles from '../../stylesheets/ButtonCV.module.css';

function ButtonCV() {
  return (
    <button
      className={styles.boton_siguiente}
      onClick={() => {
        const link = document.createElement("a");
        link.href = "/CV_Jennifer_Cros.pdf";
        link.download = "/CV_Jennifer_Cros.pdf";
        link.click();
      }}
    >
      Descargar CV
    </button>
  );
}

export default ButtonCV;