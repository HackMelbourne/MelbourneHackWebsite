import styles from "./Home.module.scss";
import hackmelb_logo from "../../components/assets/hm_dark_logo 2.svg";
import lightbulb from "../../components/assets/home/lightbulb.svg";
import FadeIn from "react-fade-in";
import { About } from "../../components/About/about";
import Highlights from "../../components/Highlights";
import Resources from "../../components/Resources/Resources";
import Scroll from "../../components/Scroll";
import Schedule from "../../components/Schedule";
import { Col, Row } from "react-bootstrap";
import { InfoButton } from "../../components/Navbar/components-styled";
import {Streams} from "../../components/Streams/streams";
import Prizes from "../Prizes";
import RulesAndFaqAccordian from "../../components/RulesAndFaqAccordian";
import {Hidden} from "@material-ui/core";


const Home = ({ pageHeight }) => {
  return (
    <div>
      <div className={styles.scroll}>
        <Scroll pageHeight={pageHeight} />
      </div>
      <div className={styles.container}>
        <img className={styles.logo} src={hackmelb_logo} alt={"Logo"} />
        <div className={styles.logo}>
          <a href = "https://hackmelb.org/" target="_blank" rel="noopener noreferrer">
            <img alt = "hackmelb logo" src = {hackmelb_logo}/>
          </a>
        </div>
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
              <a href = 'https://coherent-tartan-183.notion.site/Participants-Handbook-dc64e20afd2d415bab3f31d2d4c3e3cd' target="_blank" rel="noopener noreferrer"><InfoButton>Hackathon Information Here!</InfoButton></a>
            </FadeIn>
          </Col>
        </Row>
      </div>
        <Hidden xsDown>
        <div className={styles.spacer}/></Hidden>
      <About/>
      <Streams/>
      <Prizes/>
      <Highlights/>
      <Schedule/>
      <RulesAndFaqAccordian />
      {/* <Rules /> */}
      <Resources/>
    </div>
  );
};

export default Home;
