import React, { useEffect } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogoContainer}>
        <a href="#" className={styles.navbarLogo}>
          GIGAScore
        </a>
      </div>

      <div className={styles.centeredLinks}>
        <ul className={styles.navbarCenteredLinks}>
          <li className={styles.navbarLink}>
            <a href="#">RESULTS</a>
          </li>
          <li className={styles.navbarLink}>
            <a href="#">RANKING</a>
          </li>
          <li className={styles.navbarLink}>
            <a href="#">NEWS</a>
          </li>
        </ul>
      </div>

      <div className={styles.navbarButton}>
        <button className={styles.button}>SIGN IN</button>
      </div>
    </nav>
  );
};

export default Navbar;
