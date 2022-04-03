import styles from "./Theme.module.scss";
const Theme = () => {
  return (
    <div className={styles.Theme}>

        <h2>The Theme<span className={styles.blinking}>_</span></h2>
        <p>The theme for this will be <b>EduTech</b></p>
    </div>
  );
};
export default Theme;
