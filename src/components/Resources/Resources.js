import styles from "./Resources.module.scss";
import notion from '../assets/communication/notion.svg'
import facebook from '../assets/communication/facebook.svg'
import discord from '../assets/communication/discord.svg'

const Resources = () => {
  return (
      <div className={styles.background}>
    <section id="communication" className={styles.resources}>
      <div className={styles.heading}>
        <h2>
          Communication & Resources
          <span className={styles.blinking}>_</span>
        </h2>
      </div>
        <div className={styles.description}>
            Don't be shy! Come join the Melbourne Hack 2021 community✨
        </div>

        <div className={styles.container}>
            <a className={styles.button} href={"https://discord.com/invite/gHaXDBsX7J"} rel="noopener noreferrer" target="_blank">
                <img src={discord} alt={"Discord symbol"}/>
                <div>Hackathon discord server</div>
            </a>
            <a className={styles.button} href={"https://coherent-tartan-183.notion.site/Participants-Handbook-dc64e20afd2d415bab3f31d2d4c3e3cd"} target="_blank" rel="noopener noreferrer">
                <img src={notion} alt={"Notion symbol"}/>
                <div>Participants Handbook</div>
            </a>
            <a className={styles.button} href={"https://fb.me/e/2rwPGMIlG"} rel="noopener noreferrer" target="_blank">
                <img src={facebook} alt={"Facebook symbol"}/>
                <div>Facebook event</div>
            </a>
        </div>

    </section>
      </div>
  );
};

export default Resources;
