import styles from "./Schedule.module.scss";

const Schedule = () => {
  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.heading}>
        <h2>Schedule</h2>
        <div className={styles.underline}/>
      </div>
      <div className={styles.content}>
        <table className={styles.table}>
          <tr>
            <td>Monday</td>
            <td>8pm</td>
            <td>Opening Ceremony</td>
          </tr>
          <tr className={styles.show_border}>
            <td/>
            <td>10pm</td>
            <td>Mentor Introduction & First Mentor Check-In</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>10am</td>
            <td>GitHub Workshop</td>
          </tr>
          <tr>
            <td/>
            <td>12pm</td>
            <td>Second Mentor Check-In</td>
          </tr>
          <tr className={styles.show_border}>
            <td/>
            <td>12pm</td>
            <td>Second Mentor Check-In</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10am</td>
            <td>HTML/CSS Workshop</td>
          </tr>
          <tr>
            <td/>
            <td>12pm</td>
            <td>Third Mentor Check-In</td>
          </tr>
          <tr>
            <td/>
            <td>8pm</td>
            <td>Closing Ceremony</td>
          </tr>
        </table>
        <div className={styles.line_feature}/>
      </div>
    </section>
  );
};

export default Schedule;
