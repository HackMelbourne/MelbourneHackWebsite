import React from "react";
import styles from "./faq.module.scss";
import Question from "./question-ans-component";

export const FAQ = (props) => {
    return (
        <section className = {styles.faq}>
            <h2>FAQs</h2>
            <Question question = "When is the Hackathon happening?" 
            answer = "Yeetus Skeetus"/>
            <Question question = "When is the Hackathon happening?" 
            answer = "Yeetus Skeetus"/>
        </section>
    )
}