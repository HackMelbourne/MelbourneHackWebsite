import styles from "./Schedule.module.scss";

import {useState} from "react";
import {FaExternalLinkAlt} from "react-icons/fa";
import {Box} from "@material-ui/core";

const ZoomLink = ({ href }) => {
    // stop eslint complaining this var isn't used
    console.log(href);
    return (
        //eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
            className={styles.zoomLink}
            title="Zoom Link"
            target="_blank"
            rel="noopener noreferrer"
        >
            TBD <FaExternalLinkAlt/>
        </a>
    );
};

const workshopLink = "https://unimelb.zoom.us/j/88194739932?pwd=bDZmbVd4QVI1dVJxRS8yV2phVTRRUT09";

const WorkshopsSchedule = (
  <>
    <tr>
      <td>Apr 20</td>
      <td>2:30PM - 3:30PM</td>
      <td>Workshop #1: JS & APIs</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Apr 20</td>
      <td>4:00PM - 5:00PM</td>
      <td>Workshop #2: HTML & CSS</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Apr 21</td>
      <td>2:30PM - 3:30PM</td>
      <td>Workshop #3: GitHub</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Apr 21</td>
      <td>4:00PM - 5:00PM</td>
      <td>Workshop #4: ML/AI</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Apr 22</td>
      <td>2:30PM - 3:30PM</td>
      <td>Workshop #5: Optiver - Building an Auto-Trader</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
  </>
);

const FridaySchedule = (
  <>
    <tr>
      <td>2:30PM - 3:30PM</td>
      <td>Workshop #5: Optiver - Building an Auto-Trader</td>
    </tr>
    <tr>
      <td>5:00PM - 6:00PM</td>
      <td>Social Activity - Team Formation</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
    <tr>
      <td>6:00PM - 7:00PM</td>
      <td>Opening Ceremony & Registration Closes</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
    <tr>
      <td>7:00PM</td>
      <td>Complementary Dinner</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
  </>
);

const SaturdaySchedule = (
  <>
    <tr>
      <td>9:00AM - 12:00PM</td>
      <td>Mentor Session 1</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>1:30PM</td>
      <td>Light Refreshments</td>
    </tr>
    <tr>
      <td>2:00PM - 5:00PM</td>
      <td>Mentor Session 2</td>
    </tr>
  </>
);

const SundaySchedule = (
  <>
    <tr>
      <td>12:00PM</td>
      <td>Project Submission Deadline</td>
    </tr>
    <tr>
      <td>4:00PM - 5:00PM</td>
      <td>Social Event - Trivia Competition</td>
    </tr>
    <tr>
      <td>5:30PM - 7:00PM</td>
      <td>Closing & Award Ceremony</td>
    </tr>
  </>
);

const Schedule = () => {
  const [selected, setSelected] = useState("Workshops");
  const schedules = {
    Workshops: WorkshopsSchedule,
    Friday: FridaySchedule,
    Saturday: SaturdaySchedule,
    Sunday: SundaySchedule
  };

  return (
    <div className={styles.background}>
      <section id="schedule" className={styles.schedule}>
        <div className={styles.scheduleTitle}>
          Schedule
          <span className={styles.blinking}>_</span>
        </div>
        <div className={styles.content}>
          <div className={styles.timetable}>
            <div className={styles.buttons}>
              <button
                onClick={() => setSelected("Workshops")}
                className={`${styles.button} ${
                  selected === "Workshops" ? styles.selected : ""
                }`}
              >
                Workshops
              </button>
              <button
                onClick={() => setSelected("Friday")}
                className={`${styles.button} ${
                  selected === "Friday" ? styles.selected : ""
                }`}
              >
                Fri, Apr 22
              </button>
              <button
                onClick={() => setSelected("Saturday")}
                className={`${styles.button} ${
                  selected === "Saturday" ? styles.selected : ""
                }`}
              >
                Sat, Apr 23
              </button>
              <button
                onClick={() => setSelected("Sunday")}
                className={`${styles.button} ${
                  selected === "Sunday" ? styles.selected : ""
                }`}
              >
                Sun, Apr 24
              </button>
            </div>
              <Box overflow='auto' whiteSpace='no-wrap'>
            <table>
              <tbody>
                {schedules[selected]}
              </tbody>
            </table></Box>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
