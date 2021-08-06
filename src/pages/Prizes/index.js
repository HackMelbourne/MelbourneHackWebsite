import styles from "./Prizes.module.scss";
import prizeImg from "../../components/assets/prizes_imgs/prize.svg";

const Prizes = () => {
  return (
    <div className={styles.background}>
    <section id="prizes" className={styles.prizes}>
      <div className={styles.content}>
      <div className={styles.heading}>
        <h2>Prizes<span className={styles.blinking}>_</span></h2>
      </div>
        <div className={styles.prize_container}>
          <img src={prizeImg} className={styles.prize_2_img} alt="trophies" />
        </div>
        <div className={styles.other_prizes}>
          <div className={styles.other_prizes_content}>
            <div className={styles.subtitle}>
              Other Prizes
            </div>
            <div className={styles.spons}>
            </div>
            <div className={styles.sponsText}>
              <h4>Sponsor favourite</h4>
            </div>
            <div className={styles.swag}>
            </div>
            <div className={styles.swagText}>
                <h4>Swag and goodies</h4>
            </div>
          </div>
        </div>
            <div className={styles.mobile}>
              <div>
                <h3 className={styles.mobile_description}>First place</h3>
                <h1>$1500</h1>
              </div>
              <div>
                <h3 className={styles.mobile_description}>Second place</h3>
                <h1>$1000</h1>
              </div>
              <div>
                <h3 className={styles.mobile_description}>Third place</h3>
                <h1>$500</h1>
              </div>
              <div>
                <h3 className={styles.mobile_description}>Other Prizes</h3>
                <h4>Sponsors Favourite</h4>
                <h4>Swag and Goodies</h4>
              </div>
            </div>
            </div>
    </section>
    </div>
  );
};

export default Prizes;
