import styles from "./Highlights.module.scss";
import image1 from "../assets/Highlight icons/19.svg";
import image3 from "../assets/Highlight icons/21.svg";
import image5 from "../assets/Highlight icons/20.svg";
import image6 from "../assets/Highlight icons/24.svg";
import { Grid } from "@material-ui/core";

const Highlights = () => {
  return (
    <section id="highlights" className={styles.highlights}>
      <div className = {styles.heading}>
        <h2>Highlights<span className={styles.blinking}>_</span></h2>  
      </div>
      <Grid container spacing = {6} style = {{marginTop: "4%"}} alignItems={"center"} justifyContent={"center"}>
        <Grid item>
          <div className = {styles.content}>
            <img src = {image1} alt = "" style = {{backgroundColor: "white"}}/>
            <h3>Workshops</h3>
          </div></Grid>
          <Grid item>

          <div className = {styles.content}>
            <img src = {image5} alt = "" style = {{backgroundColor: "white"}}/>
            <h3>Mentors</h3>
          </div>
        </Grid>
        <Grid item>
          <div className = {styles.content}>
            <img src = {image3} alt = "" style = {{backgroundColor: "white"}}/>
            <h3>Networking Night</h3>
          </div></Grid>
        <Grid item>
          <div className = {styles.content}>
            <img src = {image6} alt = "" style = {{backgroundColor: "white"}}/>
            <h3>Social Night</h3>
          </div>
        </Grid>

      </Grid>
    </section>
  );
};

export default Highlights;
