import styles from "./Theme.module.scss";
const Theme = () => {
  return (
    <div className={styles.Theme}>

        <h2>The Theme<span className={styles.blinking}>_</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
    </div>
  );
};
export default Theme;
