import styles from "./Menu.module.scss";

// Menu has no dropdown functionality - can't hover on mobile
const Menu = ({ open }) => {
  return (
    <nav className={open ? `${styles.menu} ${styles.open}` : styles.menu}>
      {/* <a
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
      </a> */}
      <a
              href="https://www.eventbrite.com.au/e/melbourne-hack-2021-tickets-162202392723"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER
            </a>
    </nav>
  );
};

export default Menu;
