import styles from "./Home.module.scss";
import hackmelb_logo from "../../images/hm_dark_logo 2.svg";
import arrow_logo from "../../images/light-arrow.svg";
import FadeIn from 'react-fade-in';

const Home = () => {
  return (
  <div className={styles.container}>
    <img className = {styles.logo} src = {hackmelb_logo}/>
    <div className = {styles.title}>
      <FadeIn delay = {290}>
        <h2>August 23-25, 2021</h2>
        <h1>Melbourne Hack</h1>
        <h3>Melbourne's Premier Hackathon</h3>
      </FadeIn>
    </div>
    <img className = {styles.arrow} src = {arrow_logo}/>

  </div>
  )
};

export default Home;
