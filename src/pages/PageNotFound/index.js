import styles from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.aboutTitle}>
        404
        {/* <div className={style.underline}/> */}
      </div>
      <h2>Oh no! Try our <a href='/'>homepage</a> again</h2>
    </div>
    </div>
  );
}

export default PageNotFound;