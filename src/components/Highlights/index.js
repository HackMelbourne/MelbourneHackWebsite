import styles from "./Highlights.module.scss";
import Textbox from "../Textbox";
import image1 from "../assets/Highlight icons/19.svg";
import image2 from "../assets/Highlight icons/20.svg";
import image3 from "../assets/Highlight icons/21.svg";
import image4 from "../assets/Highlight icons/22.svg";
import image5 from "../assets/Highlight icons/23.svg";
import image6 from "../assets/Highlight icons/24.svg";
import { Grid } from "@material-ui/core";

const Highlights = () => {
  return (
    <section id="highlights" className={styles.highlights}>
      <div className = {styles.heading}>
        <h2>Highlights<span className={styles.blinking}>_</span></h2>  
      </div>
      <Grid container spacing = {6} style = {{marginTop: "4%"}}>
        <Grid className = {styles.grid} container item xs = {11} spacing = {2}>
          <div className = {styles.content}>
            <img src = {image1} alt = "" style = {{backgroundColor: "rgba(255, 255, 10, 0.15)"}}/>
            <h3>Some Text Here...</h3>
          </div>
          <div className = {styles.content2}>
            <img src = {image2} alt = "" style = {{backgroundColor: "rgba(0, 221, 255, 0.15)"}}/>
            <h3>Some Text Here...</h3>
          </div>
        </Grid>
        <Grid className = {styles.grid} container item xs = {11} spacing = {2}>
          <div className = {styles.content}>
            <img src = {image3} alt = "" style = {{backgroundColor: "rgba(255, 51, 51, 0.15)"}}/>
            <h3>Some Text Here...</h3>
          </div>
          <div className = {styles.content2}>
            <img src = {image4} alt = "" style = {{backgroundColor: "rgba(160, 51, 51, 0.15)"}}/>
            <h3>Some Text Here...</h3>
          </div>
        </Grid>
        <Grid className = {styles.grid} container item xs = {11} spacing = {2}>
          <div className = {styles.content}>
            <img src = {image5} alt = "" style = {{backgroundColor: "rgba(0, 128, 255, 0.15)"}}/>
            <h3>Some Text Here...</h3>
          </div>
          <div className = {styles.content2}>
            <img src = {image6} alt = "" style = {{backgroundColor: "rgba(51, 255, 153, 0.15)"}}/>
            <h3>Some Text Here...</h3>
          </div>
        </Grid>
        

      </Grid>

    </section>
  );
};

export default Highlights;
