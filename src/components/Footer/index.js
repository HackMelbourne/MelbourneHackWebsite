import styles from "./Footer.module.scss";
import { FaRegEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>HackMelbourne // 2021</div>
      <nav className={styles.links}>
        <a
          href="https://www.facebook.com/hackmelbourne"
          title="Check out our facebook page!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="mailto:hackmelb.team@gmail.com"
          title="Send us an email!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/company/hackmelbourne/"
          title="Follow us on LinkedIn!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
