import styles from "./Home.module.scss";
import Highlights from "./Highlights";
import Schedule from "./Schedule";

const Home = () => {
  return (
    <div className={styles.container}>
      <Highlights />
      <Schedule />
    </div>
  );
};

export default Home;
