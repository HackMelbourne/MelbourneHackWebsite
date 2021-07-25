import styles from "./Home.module.scss";
import hackmelb_logo from "../../components/assets/hm_dark_logo 2.svg";
import lightbulb from "../../components/assets/home/lightbulb.svg";
import FadeIn from "react-fade-in";
import { About } from "../../components/About/about";
import Resources from "../../components/Resources/index";
import { Col, Row } from "react-bootstrap";


const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.logo} src={hackmelb_logo} alt={"Logo"} />
        <Row style={{ width: "80vw" }}>
          <Col lg={6}>
            <img className={styles.lightbulb} src={lightbulb} alt={"Light Bulb"} />
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
      </div>
      <About/>
      {/* <Highlights/> */}
      {/* <Streams/> */}
      {/* <Schedule/> */}
      {/* <FAQ/> */}
      <Resources/>
    </div>
  );
};

export default Home;
