import styles from "./Prizes.module.scss";
import prizeImg from "../../components/assets/prizes_imgs/prize.svg";
import swag from "../../components/assets/prizes_imgs/12.svg";
import spons from "../../components/assets/prizes_imgs/13.svg";

const Prizes = () => {
  return (
    <div>
      <section id="prizes" className={styles.prizes}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>
              Prizes<span className={styles.blinking}>_</span>
            </h2>
          </div>
          <div className={styles.prize_container}>
            <div className={styles.prize_circle}>
              <div className={styles.circle}></div>
              <div className={styles.circle_text}>
                <h4>1st place</h4>
                <h5>$1500</h5>
              </div>
            </div>
            <div className={styles.prize_circle}>
              <div className={styles.circle}></div>
              <div className={styles.circle_text}>
                <h4>2nd place</h4>
                <h5>$1000</h5>
              </div>
            </div>
            <div className={styles.prize_circle}>
              <div className={styles.circle}></div>
              <div className={styles.circle_text}>
                <h4>3rd place</h4>
                <h5>$1500</h5>
              </div>
            </div>
          
          </div>
          <div className={styles.prize_container_2}>
           
            
            <div className={styles.prize_circle}>
              <div className={styles.circle}></div>
              <div className={styles.circle_text}>
               <h4>Other Swag</h4>
               <h4>and Goodies</h4>
              </div>
            </div>
      
        </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;
