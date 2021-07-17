import React from "react";
import styles from "./Textbox.module.scss";

export default function Textbox(props) {
  return <div className={styles.textbox}>{props.text}</div>;
}
