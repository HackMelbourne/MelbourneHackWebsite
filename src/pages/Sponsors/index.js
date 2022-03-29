import styles from "./Sponsors.module.scss";

const Sponsors = () => {
    return(<div className={styles.sponsors}>
        <h2>Sponsors_</h2>
        <div className = {styles.sponsorNames}>
            <div>
                <h3>Diamond</h3>
                <img src = "Star 1.png"/>
            </div>
            <div className = {styles.Gold}>
                <h3>Gold</h3>
                <img src = "Star 2.png"/>
                <img className = {styles.Optiver} src = "Optiver.png"/>
            </div>
            <div>
                <h3>Silver</h3>
                <img src = "Star 3.png"/>
                <img className = {styles.Bain} src = "Bain And Company.png"/>
            </div>
        </div>
    </div>)
}
export default Sponsors;