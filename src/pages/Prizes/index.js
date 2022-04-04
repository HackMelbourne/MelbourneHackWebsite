import styles from "./Prizes.module.scss";
import {Grid} from "@material-ui/core";

const Prizes = () => {
  return (
    <div>
      <section id="prizes" className={styles.prizes}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>
              Prizes<span className={styles.blinking}>_</span>
            </h2>
            <h3>Have you got a competitive streak? Check out our awesome prizes below!</h3>
          </div>
          <Grid container>
            <Grid xs={12} md={4} className={styles.prize_circle}>
              
              
                <img alt='1st' className = {styles.PrizeMedal} src = "1st.svg"/>
                <h4>1st place</h4>
                <h5>$1200</h5>
              
            </Grid>
            <Grid xs={12} md={4} className={styles.prize_circle}>
              
              
                <img alt='2nd' className = {styles.PrizeMedal} src = "2nd.svg"/>
                <h4>2nd place</h4>
                <h5>$1000</h5>
             
            </Grid>
            <Grid xs={12} md={4} className={styles.prize_circle}>
              
             
                <img alt='3rd' className = {styles.PrizeMedal} src = "3rd.svg"/>
                <h4>3rd place</h4>
                <h5>$800</h5>
            
            </Grid>
          
          </Grid>
          <div className={styles.prize_container_2}>
           
            
            <div className={styles.prize_circle}>
              <div className={styles.circle}></div>
              <div className={styles.circle_text}>
               <h4>Other Swag and Goodies</h4>
               <h5>Giftcards to be released soon!</h5>
              </div>
            </div>
      
        </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;
