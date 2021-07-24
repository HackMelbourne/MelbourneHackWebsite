import styles from "./Menu.module.scss";

// Menu has no dropdown functionality - can't hover on mobile
const Menu = ({ open }) => {
  return (
    <nav className={open ? `${styles.menu} ${styles.open}` : styles.menu}>
      <a
        href="https://www.facebook.com/events/426944495051069/?active_tab=discussion"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        UPDATES
      </a>
      <a
        href="https://forms.gle/JuhBU1fiFLwe8HzH8"
        target="_blank"
        rel="noopener noreferrer"
      >
        SIGN UP
      </a>
    </nav>
  );
};

export default Menu;
