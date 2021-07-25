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
          <a
            href="https://coherent-tartan-183.notion.site/Participants-Handbook-dc64e20afd2d415bab3f31d2d4c3e3cd"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.lamp}
          >
            {" "}
          </a>
          <div></div>
        </div>
        <div className={styles.resources_item}>
          <a
            href="https://discord.com/invite/gHaXDBsX7J"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discord}
          >
            {" "}
          </a>
        </div>
        <div className={styles.resources_item}>
          <a
            href="https://fb.me/e/2rwPGMIlG"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.facebook}
          >
            {" "}
          </a>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
