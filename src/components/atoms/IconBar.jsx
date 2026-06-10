import React from "react";
import styles from "../../stylesheets/IconBar.module.css";

function IconBar() {
  return (
    <>
      <nav className={styles.menu_social}>
        <a
          href="https://www.linkedin.com/in/jennifer-cros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/images/icons/Linkedin.png")}
            alt="Linkedin"
            className="socialmedia"
          />
        </a>
      </nav>
    </>
  );
}

export default IconBar;
