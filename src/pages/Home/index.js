import styles from "./Home.module.scss";
import hackmelb_logo from "../../components/assets/hm_dark_logo 2.svg";
import arrow_logo from "../../components/assets/light-arrow.svg";
import longBar from "../../components/assets/long-bar.svg";
import FadeIn from "react-fade-in";
import Highlights from "../../components/Highlights/index";
import Schedule from "../../components/Schedule/index";
import { About } from "../../components/About/about";
import {Streams} from "../../components/Streams/streams";
import Resources from "../../components/Resources/index";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.logo} src={hackmelb_logo} alt={"Logo"} />
        <Row style={{ width: "80vw" }}>
          <Col lg={6}>
            <img className={styles.arrow} src={arrow_logo} alt={"Arrow Logo"} />
          </Col>
          <Col lg={6} className={styles.title}>
            <FadeIn delay={290}>
              <h2>August 20-22nd, 2021</h2>
              <h1>
                Melbourne Hack<span className={styles.blinking}>_</span>
              </h1>
              <h3>Melbourne's Premier Hackathon Hosted by HackMelbourne</h3>
            </FadeIn>
          </Col>
        </Row>
          <img src={longBar} style={{position: "absolute", top: '85vh', width: '99vw'}}/>
      </div>
      <About />
      <Highlights />
      <Streams/>
      <Schedule />
      <Resources />
    </div>
  );
};

export default Home;
