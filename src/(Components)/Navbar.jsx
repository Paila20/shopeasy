'use client';

import { SiCentos } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBriefcase, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../(Styles)/navbar.module.css'; // Adjust the path as per your project structure

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <SiCentos className={styles.navIcon} />
        </div>

        <div className={styles.navbarCenter}>
          <h1 className={styles.logoText}>LOGO</h1>
        </div>

        <div className={styles.navbarRight}>
          <FontAwesomeIcon icon={faSearch} className={styles.navIcon} />
          <FontAwesomeIcon icon={faHeart} className={styles.navIcon} />
          <FontAwesomeIcon icon={faBriefcase} className={styles.navIcon} />
          <FontAwesomeIcon icon={faUser} className={styles.navIcon} />
          ENG <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </nav>

      <nav className={styles.bottomNavigation}>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>SHOP</li>
          <li className={styles.navItem}>SKILLS</li>
          <li className={styles.navItem}>STORIES</li>
          <li className={styles.navItem}>ABOUT</li>
          <li className={styles.navItem}>CONTACT US</li>
        </ul>
      </nav>

      <div className={styles.middle}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus sclerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
    </div>
  );
}

export default Navbar;
