import React from "react";
import style from "./Streams.module.scss"
import Category from "./Category"
import medtechSymbol from "../../components/assets/stream-symbols/medtech-symbol.svg";
import educationSymbol from "../../components/assets/stream-symbols/education-symbol.svg";
import sustainabilitySymbol from "../../components/assets/stream-symbols/sustainbility-symbol.svg";
import financeSymbol from "../../components/assets/stream-symbols/finance-symbol.svg";


export const Streams = () => {
    return(
        <div className = {style.streams}>
            <div className = {style.streamsTitle}>
                <h2>Streams</h2>
                <div className={style.underline}></div>
            </div>
            
            <div className = {style.description}>
                <h5>This year Melbourne Hack will centre around 4 streams for hackers to create from</h5>

            </div>
            <div className = {style.streamsCategories}>
                <div className = {style.rowFlex}>
                <Category title="MedTech" desc="Create a product which brings out the best in tech, save the world..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl nibh. Vivamus a massa ac quam sodales auctor.." symbol={medtechSymbol} color="#ED6A5E"/>
                <Category title="Education" desc="Create a product which brings out the best in tech, save the world..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl nibh. Vivamus a massa ac quam sodales auctor.." symbol={educationSymbol} color="#EECF37"/>
                </div>
                <div className = {style.rowFlex}>
                <Category title="Sustainability" desc="Create a product which brings out the best in tech, save the world..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl nibh. Vivamus a massa ac quam sodales auctor.." symbol={sustainabilitySymbol} color="#09BC8A"/>
                <Category title="Finance" desc="Create a product which brings out the best in tech, save the world..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl nibh. Vivamus a massa ac quam sodales auctor.." symbol={financeSymbol} color="#1B6AE3"/>
                </div>
                <div className = {style.rowFlex}>
                <Category title="Memes" desc="Create a product which brings out the best in tech, save the world..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl nibh. Vivamus a massa ac quam sodales auctor.." symbol={financeSymbol} color="#1B6AE3"/>
                <Category title="Memes" desc="Create a product which brings out the best in tech, save the world..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl nibh. Vivamus a massa ac quam sodales auctor.." symbol={financeSymbol} hidden={true}/>
                </div>
            </div>
        </div>
    )
}