import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div>Logo</div>
      </Link>
      <div className={styles.links}></div>
      <Link to="/sponsors#" className={styles.link}>
        Sponsors
      </Link>
      <Link to="/about" className={styles.link}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;
