import styles from "./Footer.module.scss";
import hackmelb_logo from "../../components/assets/footer/HM logo.svg";
import discord from "../../components/assets/footer/discord.svg";
import facebook from "../../components/assets/footer/facebook.svg";
import linkedIn from "../../components/assets/footer/linkedin.svg";
import arrow from "../../components/assets/footer/arrow-right.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftColumn}>
        <div className={styles.brand}>Melbourne Hack<span className={styles.blinking}>_</span><span className={styles.host}>by HackMelbourne</span></div>
        <div className={styles.HackMelbourne_logo}><img src={hackmelb_logo} alt={"Logo"} /></div>
      </div>
      <div className={styles.rightColumn}>
        <div>
          <span className={styles.contact}>Contact</span>
          <span className={styles.email}>Got questions? Email us at <a href="hackmelb.team@gmail.com">hackmelb.team@gmail.com</a></span>
          <a href={"https://www.eventbrite.com.au/e/melbourne-hack-2021-tickets-162202392723"} className={styles.footerButton}>
            Sign up for MelbourneHack <img className={styles.footerLogo} src={arrow} alt={"Logo"} />
          </a>
        </div>
        <div className={styles.socialLinks}>
          <nav className={styles.links}>
            <a
              href={"https://discord.com/invite/gHaXDBsX7J"}
              title="Check out our facebook page!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.footerLogo} src={discord} alt={"Logo"} />
            </a>
            <a
              href={"https://fb.me/e/2rwPGMIlG"}
              title="Send us an email!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.footerLogo} src={facebook} alt={"Logo"} />
            </a>
            <a
              href={"https://www.linkedin.com/company/hackmelbourne/"}
              title="Follow us on LinkedIn!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.footerLogo} src={linkedIn} alt={"Logo"} />
            </a>
          </nav>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
