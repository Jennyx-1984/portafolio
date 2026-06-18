import { useState, useEffect } from 'react';
import styles from '../../stylesheets/ScrollToTop.module.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      className={styles.scroll_btn}
      onClick={scrollUp}
      aria-label="Volver al inicio"
    >
      <svg className={styles.rocket_svg} width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 7 6 7 13H17C17 6 12 2 12 2Z" fill="#AFA9EC" stroke="#7F77DD" strokeWidth="1"/>
        <rect x="9" y="13" width="6" height="5" rx="1" fill="#7F77DD"/>
        <path d="M9 14 Q7 15 7 18 L9 18Z" fill="#5DCAA5"/>
        <path d="M15 14 Q17 15 17 18 L15 18Z" fill="#5DCAA5"/>
        <circle cx="12" cy="9" r="2" fill="#0d0d14" stroke="#5DCAA5" strokeWidth="1"/>
        <path d="M10 18 Q11 21 12 22 Q13 21 14 18Z" fill="#ff6b7c"/>
      </svg>

      <svg className={styles.arrow_svg} width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="#AFA9EC" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
}

export default ScrollToTop;