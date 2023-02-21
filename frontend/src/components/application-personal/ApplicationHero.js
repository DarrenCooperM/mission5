import React from "react";
// import ApplicationHeroImg from "../images/applicationHero.PNG";
import styles from "../styles/application/ApplicationHero.module.css";
import bedImg from "../icons/bed.png";
import bathImg from "../icons/bath.png";
import { useState, useEffect } from "react";

export default function ApplicationHero() {
  const [displayContent, setDisplayContent] = useState("");

  useEffect(() => {
    fetch("http://localhost:7070/home-content/home-content-images")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayContent(resultsData);
      });
  }, []);

  return (
    <div className={styles.ApplicationHeroContainer}>
      {/* <img src={ApplicationHeroImg} className={styles.heroImg} alt="heroImg" /> */}
      <img
        src={displayContent && displayContent[4].url}
        className={styles.heroImg}
        alt="modalimg"
      />
      <div className={styles.heroContent}>
        <div className={styles.heroContentContainer}>
          <p className={styles.heroPets}>
            <span>Pets Allowed</span>
          </p>
          <h3>$500 pw</h3>
          <h3>145 Mountain Rd Epsom</h3>
          <h3>Available: 09 January 2023</h3>
          <div className={styles.iconContainer}>
            <img src={bedImg} className={styles.icons} alt="bed icon" />
            <p>2 Bed</p>
            <img src={bathImg} className={styles.icons} alt="bath icon" />
            <p>1 Bath</p>
          </div>
        </div>
      </div>
    </div>
  );
}
