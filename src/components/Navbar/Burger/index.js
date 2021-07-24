import styles from "./Burger.module.scss";

const Burger = ({ open, setOpen }) => {
  // the three empty div's are the bars that make up the burger
  return (
    <div className={styles.burgerWrapper}>
      <div
        className={`${styles.burger} ${open ? styles.open : styles.closed}`}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Burger;
