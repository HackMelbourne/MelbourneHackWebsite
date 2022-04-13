import React from "react";
import style from "./About.module.scss";
import {Col, Row} from "react-bootstrap";
import about_graphic from "../../components/assets/home/about_graphic.svg";


export const About = () => {
  return (
    <div className={style.background}>
    <section id="about" className={style.about} >
      <div className={style.aboutTitle}>
        <h2>About<span className={style.blinking}>_</span> </h2>
      </div>
      <Row>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={style.description}>
            <p>Bring your creative ideas to life!</p>
            <p>
              Melbourne Hack is the flagship hackathon run by HackMelbourne, an
              intercollegiate organisation aimed at making technology more accessible
              to students.
            </p>
            <p>
              This hackathon is targeted towards students across any industry who
              are eager to get innovative.
            </p>
            <p>
              This year, Melbourne Hack will run online from the 22nd-24th of April, making it accessible to students anywhere in the
              world! Get hacking individually or in a team to create a product
              over a weekend!
            </p>
          </div>
        </Col>
      </Row>
      <img className={style.aboutImage} src={about_graphic} alt={"Logo"} />
    </section>
    </div>
  );
};
