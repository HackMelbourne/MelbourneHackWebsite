import styles from "./Highlights.module.scss";
import Textbox from "../../../components/Textbox";

const Highlights = () => {
  return (
    <section id="highlights" className={styles.highlights}>
      <div className={styles.heading}>
        <h2>Highlights of Melbourne Hack 2021</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.content}>
        <h3>
          During the duration of Melbourne Hack, there will be a tonne of
          activities to participate in. From networking events to chill
          hangouts, make the most out of this opportunity to get to upskill and
          make new connections!
        </h3>
        <div className={styles.row}>
          <Textbox text="Networking nights" />
          <Textbox text="Mentor sessions" />
          <Textbox text="Pre-hackathon workshops" />
        </div>
        <div className={styles.row}>
          <Textbox text="Social nights" />
          <Textbox text="Sposnor speeches" />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
