import styles from "./Home.module.scss";
import hackmelb_logo from "../../components/assets/hm_dark_logo 2.svg";
import arrow_logo from "../../components/assets/light-arrow.svg";
import FadeIn from "react-fade-in";
import Highlights from "../../components/Highlights/index";
import Schedule from "../../components/Schedule/index";
import { About } from "../../components/About/about";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.logo} src={hackmelb_logo} />
        <div className={styles.pic_text}>
          <div>
            <img className={styles.arrow} src={arrow_logo} />
          </div>
          <div className={styles.title}>
            <FadeIn delay={290}>
              <h2>August 20-22nd, 2021</h2>
              <h1>Melbourne Hack</h1>
              <h3>Melbourne's Premier Hackathon</h3>
            </FadeIn>
          </div>
        </div>
      </div>
      <About />
      <Highlights />
      <Schedule />
    </div>
  );
};

export default Home;
