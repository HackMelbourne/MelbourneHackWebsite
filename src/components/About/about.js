import React from "react";
import style from "./About.module.scss"
import aboutImg from "../assets/speech-bubble.svg"

export const About = () => {
    return(
        <div className = {style.about}>
            <div className = {style.aboutTitle}>
                <h2>About</h2>
                <div className={style.underline}></div>
            </div>
            
            <div className = {style.description}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
            </div>
        </div>
    )
}