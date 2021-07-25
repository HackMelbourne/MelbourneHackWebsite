import styles from "./Resources.module.scss";
import { FaSlack, FaFacebook, FaExternalLinkAlt } from "react-icons/fa";
import lamp from "../../components/assets/home/lamp.svg";
import discord from "../../components/assets/home/discord.svg";
import facebook from "../../components/assets/home/facebook.svg";

const Textbox = ({ text, icon, button }) => {
  return (
    <div className={styles.textbox}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.text}>{text}</div>
      <div>{button}</div>
    </div>
  );
};

const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      <div className={styles.heading}>
        <h2>Communication Channels & Resources</h2>
        {/* <div className={styles.underline}></div> */}
      </div>
      <div className={styles.content}>
        <div className={styles.resources_item}>
        <a href="https://www.google.com.au/" className={styles.lamp}></a>
          <div></div>
        </div>
        <div className={styles.resources_item}>
        <a href="https://www.google.com.au/" className={styles.discord}></a>
        </div>
        <div className={styles.resources_item}>
        <a href="https://www.google.com.au/" className={styles.facebook}></a>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
