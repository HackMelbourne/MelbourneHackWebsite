import React, { useState } from 'react'
import styles from "./RulesAndFaqAccordian.module.scss";
import {FaExternalLinkAlt, FaAngleUp} from "react-icons/fa";

export default function RulesAndFaqAccordian() {
  const FAQS = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a design sprint-like competition, in which a team of programmers and others including designers and project managers collaborate intensively on creative technology projects. The event usually lasts from two days up to a week and includes a panel of experienced judges."
    }, 
    {
      question: "Who can participate?",
      answer: "All local and international students are welcome to participate (secondary or tertiary).<br/><br/>Members that are participating in-person must be over the age of 18 and abide by all CovidSafe event regulations."
    },
    {
      question: "What if I don't know how to code?",
      answer: "Some coding experience is definitely preferable if your goal is to create a finished product. HOWEVER, hackathons are all about getting out of your comfort zone. Melbourne Hack will strive to make sure that you have the resources and tools to create something, even if it's not a 100% finished product. What's most important is your interest in technology and passion to learn something new."
    },
    {
      question: "How much does it cost to participate?",
      answer: "Melbourne Hack is a completely free event! We want to make this accessible to everyone so there is absolutely no cost involved and lots of perks for joining!"
    },
  ]
  return (
    <div className={styles.gradientBackground}>
      <section id="rules" className={styles.rules}>
      <div style={{height: '1.5rem'}}></div>
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
          {FAQS.map((ele)=>{
            return (
              <FaqItem key={ele} question={ele.question} answer={ele.answer}/>
            )
          })

          }
        </div>
      </section>
      <div style={{height: '1rem'}}></div>
      <div className={styles.faqsSubTitle}>
        How can I contribute?
      </div>
      <Contribute />
    </div>
  )
}

function FaqItem({question, answer}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <div className={styles.faqHeaderContainer} onClick={()=>{setIsOpen(!isOpen)}}>
        <div className={styles.question}>
          {question}
        </div>

          {isOpen ? <div className={`${styles.icon} ${styles.active}`}><FaAngleUp /> </div> 
          : <div className={`${styles.icon}`}><FaAngleUp/></div>}
      </div>
      
      {isOpen ? <div className={styles.answer}>
        {answer}
      </div> : null}
    </div>
  )
}

function Contribute() {
  return (
    <div className={styles.contributeSection}>
      <div className={styles.contributeWhite}>
        <div className={styles.scrollTextSlow}>{`Ideation. UI/UX Design. Graphic Design. Development/Coding. Presentation/ Pitching. Marketing/Commercial Viability. `.repeat(10)}</div>
      </div>
      <div className={styles.contributeGreen}>
      <div className={styles.scrollTextFast}>{`Marketing/Commercial Viability. Presentation/ Pitching. Development/Coding. Graphic Design. UI/UX Design. Ideation. `.repeat(10)}</div>
      </div>
    </div>
  )
}