import React from "react";
import "./questions.css";
import CSSTransitionGroup from 'react-addons-css-transition-group';
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
                        <div onClick = {toggle} className = "question">
                            <h3>{this.props.question}</h3>
                        </div>
                        <div ref={setCollapsibleElement}>
                            <div className = "answer">
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