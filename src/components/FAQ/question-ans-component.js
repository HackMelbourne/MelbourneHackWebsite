import React from "react";
import styles from "./questions.module.scss";
import dropdown_arrow from "../assets/down-arrow.png"
import SlideToggle from "react-slide-toggle";

export default class Question extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
        this.boxClicked = this.boxClicked.bind(this);
    }

    boxClicked(){
        this.setState({visible: !this.state.visible})
    }

    render(){
        return(
            <div>
                <SlideToggle duration = {500} collapsed
                render = {({toggle, setCollapsibleElement, progress}) => (
                    <div>
                        <div onClick = {toggle} className = {styles.question}>
                            <span style = {{fontSize: "150%"}}>{this.props.question}</span>
                            <img src = {dropdown_arrow} alt = "Dropdown arrow"/>
                        </div>
                        <div ref={setCollapsibleElement}>
                            <div className = {styles.answer}>
                                <h3>{this.props.answer}</h3>
                            </div>
                        </div>
                    </div>
                )}>
                </SlideToggle>
            </div>
        )
    }
}