import React from "react";
import styles from "./Category.module.scss";

export default function Category(props) {
  return (
    <div className={styles.categoryBox} name={props.hidden ? "hidden" : null}>
      <div className={styles.categoryText}>
        <div className={styles.categoryTitle} style={{color: props.color}}>{props.title}</div>
        <div className={styles.categoryDesc}><p>{props.desc}</p></div>
      </div>
      <div className={styles.categoryImg}>
      <img src={props.symbol}  alt={`${props.title} Logo`}/>
      </div>
    </div>
  );
}
