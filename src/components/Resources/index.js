import styles from "./Resources.module.scss";

const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      <div className={styles.heading}>
        <h2>Communication Channels & Resources</h2>
        {/* <div className={styles.underline}></div> */}
      </div>
      <div className={styles.content}>
        <div className={styles.resources_item}>
          <div className={styles.notion}>
          <a
            href="https://coherent-tartan-183.notion.site/Participants-Handbook-dc64e20afd2d415bab3f31d2d4c3e3cd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Participant Handbook</p>
          </a>
          
          </div>
          <div></div>
        </div>
        <div className={styles.resources_item}>
          <div className={styles.discord}>
          <a
            href="https://discord.com/invite/gHaXDBsX7J"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Melbourne Hack 2021 Discord</p>
          </a>
          
          </div>
        </div>
        <div className={styles.resources_item}>
          <div className={styles.facebook}>
          <a
            href="https://fb.me/e/2rwPGMIlG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Facebook event</p>
          </a>
          
            </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
