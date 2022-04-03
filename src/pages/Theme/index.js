import styles from "./Theme.module.scss";
const Theme = () => {
  return (
    <div className={styles.Theme}>

        <h2>The Theme<span className={styles.blinking}>_</span></h2>
        <img alt='educationtech' src = "theme-edtech.svg"/>
        <p>The theme for this will be <b>EduTech</b></p>
        <p>
          The theme of this hackathon is to help students learn more efficiently, especially during a period of online learning.
        </p>
    </div>
  );
};
export default Theme;
