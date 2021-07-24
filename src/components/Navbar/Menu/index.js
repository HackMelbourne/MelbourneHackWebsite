import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

// Menu has no dropdown functionality - can't hover on mobile
const Menu = ({ open }) => {
  return (
    <nav className={open ? `${styles.menu} ${styles.open}` : styles.menu}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        UPDATES
      </a>
      <Link to="/Prizes">PRIZES</Link>
      <Link to="/Sponsors">SPONSORS</Link>
      <a
        href="https://forms.gle/"
        target="_blank"
        rel="noopener noreferrer"
      >
        SIGN UP
      </a>
    </nav>
  );
};

export default Menu;
