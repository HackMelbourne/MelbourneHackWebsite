import styles from "./Menu.module.scss";
import { HashLink as Link } from "react-router-hash-link";

// Menu has no dropdown functionality - can't hover on mobile
const Menu = ({ open }) => {
  return (
    <nav className={open ? `${styles.menu} ${styles.open}` : styles.menu}>
      <Link to="/Sponsors">Sponsors</Link>
      <a
        href="https://www.eventbrite.com.au/e/melbourne-hack-2021-tickets-162202392723"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register
      </a>
    </nav>
  );
};

export default Menu;
