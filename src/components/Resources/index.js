import styles from "./Resources.module.scss";
import { FaSlack, FaFacebook, FaExternalLinkAlt } from "react-icons/fa";

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
        <h2>Resources</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.resources_item}>
          <div className={styles.folder_img}></div>
          <Textbox
            text="Hackathon Guide (Notion)"
            title="Notion"
            icon={<FaExternalLinkAlt />}
            button={
              <a
                className={styles.button}
                href="https://www.facebook.com/events/426944495051069"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD
              </a>
            }
          />
          <div></div>
        </div>
        <div className={styles.resources_item}>
          <div className={styles.speech_bubble_img}></div>
          <Textbox
            text="Follow our Facebook event page for updates and highlights of the event!"
            title="Facebook"
            icon={<FaFacebook />}
            button={
              <a
                className={styles.button}
                href="https://www.facebook.com/events/426944495051069"
                target="_blank"
                rel="noopener noreferrer"
              >
                FOLLOW
              </a>
            }
          />
        </div>
        <div className={styles.resources_item}>
          <div className={styles.speech_bubble_img}></div>
          <Textbox
            text="We will have an active Slack during the hackathon, which will be used for updates!"
            title="Slack"
            icon={<FaSlack />}
            button={
              <a
                className={styles.button}
                href="https://www.facebook.com/events/426944495051069"
                target="_blank"
                rel="noopener noreferrer"
              >
                JOIN
              </a>
            }
          />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
