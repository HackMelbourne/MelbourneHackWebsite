import React from "react";
import styles from "./Sponsor.module.scss";
import optiver_logo from "../../components/assets/sponsors/optiver/optiver.png"
import arcitecta_logo from "../../components/assets/sponsors/arcitecta/arcitecta.png"

export const Sponsor = (props) => {
    return(
        <div className={styles.sponsorsContainer}>
            <h1 className={styles.sponsHeading}>
                Meet Our Sponsors
            </h1>
            <div className={styles.diamondSponsor}>
            <h1>
                Diamond Tier
            </h1>
            <table className={styles.sponsorTable}> 
                <tr>
                <PlaceHolder tier="Diamond"/>
                </tr>
            </table>

            </div>
            <div class={styles.separator}/>
            <div className={styles.platinumSponsor}>
            <h1>
                Platinum Tier
            </h1>
            <table className={styles.sponsorTable}> 
                <tr>
                <PlaceHolder tier="Platinum"/>
                </tr>
            </table>

            </div>
            <div class={styles.separator}/>
            <div className={styles.goldSponsor}>
            <h1>
                Gold Tier
            </h1>
            <table className={styles.sponsorTable}> 
                <tr>
                    <SponsorD link="" logo={optiver_logo} sponsorName={"Optiver"} alt="optiver"/>
                </tr>
            </table>
            
            </div>
            <div class={styles.separator}/>
            <div className={styles.silverSponsor}>
            <h1>
                Silver Tier
            </h1>
            <table className={styles.sponsorTable}>
                <tr>
                <SponsorD link="" logo={arcitecta_logo} sponsorName={"Architecta"} alt="Architecta"/>
                </tr>
            </table>

            </div>
    </div>
    )
}

const SponsorD = (props) => {
    return (
      <td>
        <a href={props.link}>
          <img alt = "Sponsor Logo" className={styles.sponsLogo} src={props.logo}></img>
        </a>
      </td>
    )
  }

const PlaceHolder = (props) => {
    return (
      <td>
        <a href="/sponsor_us">
          <h2 className={styles.placeHolder}>
            Be the first {props.tier} tier sponsor!
          </h2>
        </a>
        
      </td>
    )
  }