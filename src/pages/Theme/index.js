import styles from "./Theme.module.scss";
const Theme = () => {
  return (
    <div className={styles.Theme} id='theme'>
        <h2>The Theme<span className={styles.blinking}>_</span></h2>
        <img alt='educationtech' src = "edutech.png" height="300"/>
        <h3>EduTech</h3>
        
        <p>
          This year's theme is Education Technology! During a time where our digital
          education ecosystem is faced with the challenges of online delivery, this theme urges hackers
          to formulate innovative, forward-thinking solutions that can make a positive impact 
          on the lives of students, teachers and other stakeholders!
        </p>
    </div>
  );
};
export default Theme;
