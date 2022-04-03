import styles from "./Sponsors.module.scss";
import {Grid} from "@material-ui/core";

const Sponsors = () => {
    return(<div className={styles.sponsors}>
        <h2>Sponsors<span className={styles.blinking}>_</span></h2>
        <Grid container className = {styles.sponsorNames}>
            <Grid item xs={12} md={6}><div className = {styles.Gold}>
                <h3>Gold</h3>
                <img alt='star' src = "Star 2.png"/>
                <img alt='logo' className = {styles.Optiver} src = "Optiver.png"/>
            </div></Grid>
            <Grid item xs={12} md={6}><div>
                <h3>Silver</h3>
                <img alt='star' src = "Star 3.png"/>
                <img alt='logo' className = {styles.Bain} src = "Bain And Company.png"/>
            </div></Grid>
        </Grid>
    </div>)
}
export default Sponsors;