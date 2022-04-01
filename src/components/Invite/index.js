import styles from "./Invite.module.scss";
import arrow from "../../components/assets/footer/arrow-right.svg";

const Invite = () => {
    return (
        <div className={styles.invite} >
            <div className={styles.text}>
                <span className={styles.firstLine}>Get involved and</span><span className={styles.secondLine}>register now!</span>
            </div>
            <div className={styles.buttonDIV}>
                <a href={"https://www.eventbrite.com.au/e/melbourne-hack-2021-tickets-162202392723"} className={styles.button}>
                    <span>Register</span><img className={styles.footerLogo} src={arrow} alt={"Logo"} />
                </a>
            </div>
        </div>
    );
};

export default Invite;