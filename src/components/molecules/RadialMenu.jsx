import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../stylesheets/RadialMenu.module.css";
import Csharp from "../../assets/images/icons/c#.png";
import Css from "../../assets/images/icons/css.png";
import Html from "../../assets/images/icons/html.png";
import Java from "../../assets/images/icons/java.png";
import Javascript from "../../assets/images/icons/javascript.png";
import Phaser from "../../assets/images/icons/phaser.png";
import Php from "../../assets/images/icons/php.png";
import Python from "../../assets/images/icons/python.png";
import Sql from "../../assets/images/icons/sql.png";
import Wordpress from "../../assets/images/icons/wordpress.png";
import PowerImg from "../../assets/images/powerbutton.png";
import ReactIcon from "../../assets/images/icons/React-icon.png";
import Springboot from "../../assets/images/icons/springboot.png";

export default function RadialMenu() {
  const [open, setOpen] = useState(false);

  const items = [
    { id: 1, img: Csharp },
    { id: 2, img: Css },
    { id: 3, img: Html },
    { id: 4, img: Java },
    { id: 5, img: Javascript },
    { id: 6, img: Phaser },
    { id: 7, img: Php },
    { id: 8, img: Python },
    { id: 9, img: Sql },
    { id: 10, img: Wordpress },
    { id: 11, img: ReactIcon },
    { id: 12, img: Springboot},
  ];

  const radius = 120;

  return (
    <div className={styles.radial_container}>
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={item.id}
            className={styles.radial_item}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={open ? { x, y, opacity: 1 } : { x: 0, y: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img src={item.img} alt="icon" />
          </motion.div>
        );
      })}

      <div
        className={`${styles.power_button_wrapper} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
      >
        <img
          src={PowerImg}
          alt="Power"
          className={styles.power_button_img}
          draggable={false}
        />
      </div>
    </div>
  );
}