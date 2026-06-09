import React, { useEffect } from "react";
import objectFitImages from "object-fit-images";
import styles from "../../stylesheets/AvatarFrame.module.css";

const AvatarFrame = () => {
  useEffect(() => {
    objectFitImages();
  }, []);

  return (
    <div className={styles.frame_card}>
      <div className={styles.orbit_wrap}>
        <div className={styles.orbit_ring}></div>
        <div className={styles.orbit_ring2}></div>
        <div className={styles.orbit_img}>
          <img
        src={require('../../assets/images/fotomia.png')} 
        alt="avatar"
        className={styles.avatar}
      />
        </div>
    </div>
    </div>
  );
};

export default AvatarFrame;