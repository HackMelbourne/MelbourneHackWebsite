import styles from "./Sponsors.module.scss";
import {Grid} from "@material-ui/core";
import redMarble from '../../components/assets/sponsors/red_marble.png';
import integraDev from '../../components/assets/sponsors/integradev/integradev.png';

const Sponsors = () => {
    return(<div className={styles.sponsors}>
        <h2>Sponsors<span className={styles.blinking}>_</span></h2>
        <Grid container className = {styles.sponsorNames}>
            <Grid item xs={12} md={4}><div>
                <h3>Diamond</h3>
                <img alt='star' src = "Star 1.png"/>
                <img alt='logo' className = {styles.Optiver} src={redMarble}/>
                <img alt='logo' className = {styles.integraDev} src = {integraDev} />
            </div></Grid>
            <Grid item xs={12} md={4}><div>
                <h3>Platinum</h3>
                <img alt='star' src = "Star 3.png"/>
                <img alt='logo' className = {styles.Optiver} src = "Optiver.png"/>
            </div></Grid>
            <Grid item xs={12} md={4}><div>
                <h3>Gold</h3>
                <img alt='star' src = "Star 2.png"/>
                <img alt='logo' className = {styles.Optiver} src = "Bain And Company.png"/>
            </div></Grid>
        </Grid>
    </div>)
}
export default Sponsors;