import styles from "./Prizes.module.scss";

const Prizes = () => {
  return (
    <section id="prizes" className={styles.prizes}>
      <div className={styles.heading}>
        <h2>Prizes </h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.prize_item}>
            <h1 className={styles.desktop}>$150</h1>
            <div className={styles.prize_3_img}></div>
          </div>
          <div className={styles.prize_item}>
            <h1 className={styles.desktop}>$250</h1>
            <div className={styles.prize_1_img}></div>
          </div>
          <div className={styles.prize_item}>
            <h1 className={styles.desktop}>$200</h1>
            <div className={styles.prize_2_img}></div>
          </div>
          <div className={styles.mobile}>
            <div>
              <h3 className={styles.mobile_description}>First place</h3>
              <h1>$250</h1>
            </div>
            <div>
              <h3 className={styles.mobile_description}>Second place</h3>
              <h1>$200</h1>
            </div>
            <div>
              <h3 className={styles.mobile_description}>Third place</h3>
              <h1>$150</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
