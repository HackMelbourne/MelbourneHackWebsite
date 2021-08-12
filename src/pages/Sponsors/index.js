import React from "react";
import styles from "./Sponsor.module.scss";
import bainAndCo from "../../components/assets/sponsors/bain_and_co/bain_and_co.png";
import csiro from "../../components/assets/sponsors/csiro/csiro.png";
import optiver from "../../components/assets/sponsors/optiver/optiver_1.png";
import arcitecta from "../../components/assets/sponsors/arcitecta/arcitecta_logo.png";
import integradev from "../../components/assets/sponsors/integradev/integradev.svg";
import tibra from "../../components/assets/sponsors/tibra/tibra_logo_1.png";
import diamondIcon from "../../components/assets/sponsors/diamond.svg";
import goldIcon from "../../components/assets/sponsors/gold.svg";
import silverIcon from "../../components/assets/sponsors/silver.svg";

const SponsorLogo = ({src, alt, href}) => (
  <div className={styles.sponsorLogo}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt}></img>
    </a>
  </div>
);

export const Sponsor = (props) => {
  return (
    <div className={styles.sponsorsContainer}>
      <div className={styles.row}>
        <div className={styles.icon}>
          <img src={diamondIcon} alt="Diamond Sponsors" width="300px"></img>
        </div>
        <div className={styles.sponsors}>
          <SponsorLogo src={tibra} alt="Tibra" href="https://www.tibra.com/"/>
          <SponsorLogo src={arcitecta} alt="Arcitecta" href="https://www.arcitecta.com/"/>
          <SponsorLogo src={integradev} alt="Integradev" href="https://www.integradev.com.au/"/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon}>
          <img src={goldIcon} alt="Gold Sponsors" width="300px"></img>
        </div>
        <div className={styles.sponsors}>
          <SponsorLogo src={optiver} alt="Optiver" href="https://www.optiver.com/"/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon}>
          <img src={silverIcon} alt="Silver Sponsors" width="300px"></img>
        </div>
        <div className={styles.sponsors}>
          <SponsorLogo src={bainAndCo} alt="Bain and Co" href="https://www.bain.com/"/>
          <div className={`${styles.sponsorLogo} ${styles.csiro}`}>
            <a href="https://www.csiro.au/" target="_blank" rel="noopener noreferrer">
              <img src={csiro} alt="CSIRO"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
