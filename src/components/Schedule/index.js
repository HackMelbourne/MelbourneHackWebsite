import styles from "./Schedule.module.scss";

import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ZoomLink = ({ href }) => (
  <a
    className={styles.zoomLink}
    href={href}
    title="Zoom Link"
    target="_blank"
    rel="noopener noreferrer"
  >
    Zoom <FaExternalLinkAlt />
  </a>
);

const workshopLink = "https://unimelb.zoom.us/j/88194739932?pwd=bDZmbVd4QVI1dVJxRS8yV2phVTRRUT09";

const WorkshopsSchedule = (
  <>
    <tr>
      <td>Aug 16</td>
      <td>2:00PM - 4:00PM</td>
      <td>Workshop #1: React</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Aug 17</td>
      <td>2:00PM - 3:00PM</td>
      <td>Workshop #2: CSS Framework</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Aug 17</td>
      <td>4:00PM - 6:00PM</td>
      <td>Workshop #3: Computer Vision</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Aug 19</td>
      <td>2:00PM - 3:00PM</td>
      <td>Workshop #4: APIs</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Aug 19</td>
      <td>4:00PM - 6:00PM</td>
      <td>Workshop #5: Mobile Development</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Aug 20</td>
      <td>2:00PM - 3:30PM</td>
      <td>Workshop #6: Git and Hosting</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
    <tr>
      <td>Aug 21</td>
      <td>4:00PM - 5:30PM</td>
      <td>Workshop #7: How to Pitch</td>
      <td>
        <ZoomLink href={workshopLink} />
      </td>
    </tr>
  </>
);

const FridayBeforeSchedule = (
  <>
    <tr>
      <td>4:00PM - 6:30PM</td>
      <td>Women's Networking Night with WIT</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
  </>
);

const ThursdaySchedule = (
  <>
    <tr>
      <td>7:00PM - 9:00PM</td>
      <td>Streams Panel Event</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
  </>
);

const FridaySchedule = (
  <>
    <tr>
      <td>6:00PM - 7:00PM</td>
      <td>Opening Ceremony</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
    <tr>
      <td>7:30PM - 9:30PM</td>
      <td>Team Formation Socials</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
    <tr>
      <td>8:00PM - 9:00PM</td>
      <td>Mentor Window #1</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
    <tr>
      <td>9:00PM</td>
      <td>Movie Night</td>
      <td>
        {/* <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" /> */}
      </td>
    </tr>
  </>
);

const SaturdaySchedule = (
  <>
    <tr>
      <td>9:00AM</td>
      <td>Coffee Gathering</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>10:00AM - 2:00PM</td>
      <td>Mentor Window #2</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>11:00AM - 12:00PM</td>
      <td>The Start-up Space w/ Startmate</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>3:00PM - 7:00PM</td>
      <td>Mentor Window #3</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>6:00PM - 8:00PM</td>
      <td>Sponsor Networking Night</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>8:30PM - 11:59PM</td>
      <td>Valorant Party Night</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>8:30PM - 11:00PM</td>
      <td>Board Games Night</td>
      <td>
      </td>
    </tr>
  </>
);

const SundaySchedule = (
  <>
    <tr>
      <td>9:30AM - 1:00PM</td>
      <td>Mentor Window #4</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>1:00PM</td>
      <td>Submission Deadline</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>1:00PM - 3:00PM</td>
      <td>Scavenger Hunt</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>5:30PM - 7:30PM</td>
      <td>Closing Ceremony</td>
      <td>
      </td>
    </tr>
  </>
);

const Schedule = () => {
  const [selected, setSelected] = useState("Workshops");
  const schedules = {
    Workshops: WorkshopsSchedule,
    FridayBefore: FridayBeforeSchedule,
    Thursday: ThursdaySchedule,
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
                onClick={() => setSelected("FridayBefore")}
                className={`${styles.button} ${
                  selected === "FridayBefore" ? styles.selected : ""
                }`}
              >
                Sat, Aug 20
              </button>
              <button
                onClick={() => setSelected("Thursday")}
                className={`${styles.button} ${
                  selected === "Thursday" ? styles.selected : ""
                }`}
              >
                Sun, Aug 21
              </button>
              <button
                onClick={() => setSelected("Friday")}
                className={`${styles.button} ${
                  selected === "Friday" ? styles.selected : ""
                }`}
              >
                Mon, Aug 22
              </button>
              <button
                onClick={() => setSelected("Saturday")}
                className={`${styles.button} ${
                  selected === "Saturday" ? styles.selected : ""
                }`}
              >
                SAT 21st
              </button>
              <button
                onClick={() => setSelected("Sunday")}
                className={`${styles.button} ${
                  selected === "Sunday" ? styles.selected : ""
                }`}
              >
                SUN 22nd
              </button>
            </div>
            <table>
              <tbody>
                {schedules[selected]}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
