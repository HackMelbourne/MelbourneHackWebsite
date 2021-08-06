import React from "react";
import styles from "./Rules.module.scss";
import {FaExternalLinkAlt} from "react-icons/fa";

const Rules = () => {
  return (
    <section id="rules" className={styles.rules}>
      <div className={styles.faqsTitle}>
        Rules &amp; FAQ
        <span className={styles.blinking}>_</span>
      </div>
      <div className={styles.content}>
        <h5>
          The rules are available in the{" "}
          <a
            className={styles.externalLink}
            href="https://coherent-tartan-183.notion.site/Rules-71924382ce8848deab46937e23bc696d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Participants Handbook{" "}
            <FaExternalLinkAlt />
          </a>.
          </h5>
        <table className={styles.table}>
          <tr>
            <td>What is a hackathon?</td>
            <td>
            A hackathon is a design sprint-like competition, in which a team of programmers and others including designers and project managers collaborate intensively on creative technology projects. The event usually lasts from two days up to a week and includes a panel of experienced judges.
            </td>
          </tr>
          <tr>
            <td>Is there a theme for Melbourne Hack 2021?</td>
            <td>Yes but also no... This year, we don't have a fixed overarching theme. Instead, participants can create a project under 1 of the 5 streams: Finance, Medical Technology (MedTech), Sustainability and Education (and our just-for-fun stream: Memes).
            </td>
          </tr>
          <tr>
            <td>Who can participate?</td>
            <td>
            Members that are participating in-person must be over the age of 18.
            </td>
          </tr>
          <tr>
            <td>What if I don’t know how to code?</td>
            <td>
            Some coding experience is definitely preferable if your goal is to create a finished product.
            
            <p>HOWEVER, hackathons are all about getting out of your comfort zone. Melbourne Hack will strive to make sure that you have the resources and tools to create something, even if it's not a 100% finished product. What's most important is your interest in technology and passion to learn something new.</p>
            </td>
          </tr>
          <tr>
            <td>
            How much does it cost?
            </td>
            <td>
            Melbourne Hack is a completely free event! We want to make this accessible to everyone so there is absolutely no cost involved and lots of perks for joining!
            </td>
          </tr>
          <tr>
            <td>Does my whole team need to register/get a ticket?</td>
            <td>
            Yes, each member in your team needs to register for a ticket through our event site. You do not need to put information about your team in your personal registration.
            </td>
          </tr>
          <tr>
            <td>How many people can be in a team?</td>
            <td>A team can have a minimum of 2 and a maximum of 4 people.</td>
          </tr>
          <tr>
            <td>I don’t have a team, can I sign up as an individual?</td>
            <td>
              Yes! If you don’t have a team, hop on over to our Discord to connect with others that are also looking for a team
            </td>
          </tr>
          <tr>
            <td>What happens if I don't find a team?</td>
            <td>
              <p>
              We encourage all participants to form their own teams through the #find-a-team channel on our discord. If you are having difficulties finding a team, please email hackathon@hackmelb.org and we will try our best to find you a team.
              </p>
            </td>
          </tr>
        </table>
        <div className={styles.otherQuestions}>
          <h5>Still have more questions? Find more FAQs in the{" "}
          <a
            className={styles.externalLink}
            href="https://coherent-tartan-183.notion.site/FAQ-64723d00d7804fe1b667ab4f3916dda1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Participants Handbook{" "}
            <FaExternalLinkAlt />
          </a> or contact us!</h5>
        </div>
      </div>
    </section>
  );
};

export default Rules;