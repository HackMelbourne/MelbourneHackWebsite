import React from "react";
import style from "./About.module.scss";

export const About = () => {
  return (
    <section className={style.about}>
      <div className={style.aboutTitle}>
        <h2>About</h2>
        <div className={style.underline}/>
      </div>

      <div className={style.description}>
        <p>Bring your creative ideas to life~</p>
        <p>
          Melbourne Hack is the flagship hackathon run by HackMelbourne, an
          intercollegiate organisation aimed at making technology more accesible
          to students.
        </p>
        <p>
          This hackathon is targeted towards students across any industry who
          are eager to get innovative.
        </p>
        <p>
          This year, Melbourne Hack will run from the 20th-22nd of August, both
          online and in-person, making it accessible to students anywhere in the
          world! Getting hacking individually or in a team to create a product
          over a weekend!
        </p>
        <p>Find out more for what's install in the highlights below. </p>
      </div>
    </section>
  );
};
