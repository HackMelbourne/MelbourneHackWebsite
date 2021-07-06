import styles from "./Background.module.scss";

const Background = ({ children }) => {
  return <main className={styles.background}>{children}</main>;
};

export default Background;
