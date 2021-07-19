import styles from "./Prizes.module.scss";

const Prizes = () => {
  return (
    <section id="prizes" className={styles.prizes}>
      <div className={styles.heading}>
        <h2>Prizes </h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.content}>
        <h3>
          There's a lot in stall for this year's hackathon. During the duration
          of Melbourne Hack, there will be a tonne of activities to participate
          in. From networking events to chill social nights, make the most out
          of this opportunity to learn new skills and make new connections!
        </h3>
        <div className={styles.row}></div>
      </div>
    </section>
  );
};

export default Prizes;
