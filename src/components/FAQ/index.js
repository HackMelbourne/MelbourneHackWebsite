import React from "react";
import styles from "./faq.module.scss";
import Question from "./question-ans-component";

export const FAQ = (props) => {
    return (
        <section className = {styles.faq}>
            <h2 style = {{fontSize: "250%"}}>FAQs</h2>
            <Question question = "When is the Hackathon happening?" 
            answer = "Yeetus Skeetus"/>
            <Question question = "Where is the Hackathon going to be held?" 
            answer = "Yeetus Skeetus"/>
            <Question question = "How many people can be in a team?" 
            answer = "Yeetus Skeetus"/>
            <Question question = "I don't have a team, can I sign up as an individual?" 
            answer = "Yeetus Skeetus"/>
            <Question question = "How many people can be in a team?" 
            answer = "Yeetus Skeetus"/>
            <Question question = "When is the deadline for applications?" 
            answer = "Yeetus Skeetus"/>
        </section>
    )
}