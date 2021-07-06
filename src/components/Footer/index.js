import styles from "./Footer.module.scss";

const Footer = () => {
  return (
	  <footer className={styles.footer}>
      <nav className={styles.links}>
        <a
          href="mailto:hackmelb.team@gmail.com"
          title="Send us an email!"
          target="_blank"
          rel="noopener noreferrer"
        >
			Link1
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
