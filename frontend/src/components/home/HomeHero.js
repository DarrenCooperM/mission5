import React from "react";
// import heroImage from "../images/homeHeroImg.png";
import styles from "../styles/home/Hero.module.css";

// need to sort background styling for main title

export default function HomeHero() {
  return (
    <div className={styles.heroContainer}>
      {/* <img className={styles.heroImage} src={heroImage} alt="heroImage" /> */}
      <div className={styles.banner}></div>
      <div className={styles.heroTitles}>
        <h1 className={styles.heroTitle}>Solutions for</h1>
        <h1 className={styles.heroTitleTwo}>
          Investors, Landlords and Renters
        </h1>
        <div className={styles.homeTitleLinks}>
          <button className={styles.agentLink}>Find an Agent</button>
          <a href="/Rentals"><button className={styles.rentalsLink} >Find Rentals</button></a>
        </div>
      </div>
    </div>
  );
}
