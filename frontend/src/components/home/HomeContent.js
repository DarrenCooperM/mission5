import React from "react";
import styles from "../styles/Content.module.css";
import aptImg from "../images/apt.png";
import interior from "../images/interior.jpg";
import rentals from "../images/rentals.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

// need to find a way to center the content below and its veering off to the left a bit. idk why

export default function HomeContent() {
  const [displayContent, setDisplayContent] = useState("");

  useEffect(() => {
    fetch("http://localhost:7070/content/contentinfo")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayContent(resultsData);
      });
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentFeatures}>
        {/* first section  */}
        <img className={styles.contentImages} src={aptImg} alt="aptImg" />
        <div className={styles.contentSection}>
          <h3 className={styles.contentTitles}>
            {displayContent && displayContent[0].title}
          </h3>

          <h2 className={styles.contentSubtitles}>
            {displayContent && displayContent[0].subtitle}
          </h2>
          <p className={styles.contentText}>
            {displayContent && displayContent[0].text}
          </p>
          <button className={styles.findAgent}>Find An Agent</button>
        </div>
        {/* second section  */}

        <div className={styles.contentSection}>
          <h3 className={styles.contentTitles}>
            {displayContent && displayContent[1].title}
          </h3>
          <h2 className={styles.contentSubtitles}>
            {displayContent && displayContent[1].subtitle}
          </h2>
          <p className={styles.contentText}>
            {displayContent && displayContent[1].text}
          </p>
          <button className={styles.findAgent}>Find An Agent</button>
        </div>
        <img className={styles.contentImages} src={interior} alt="interior" />
        {/* third section  */}
        <img className={styles.contentImages} src={rentals} alt="rentals" />
        <div className={styles.contentSection}>
          <h3 className={styles.contentTitles}>
            {displayContent && displayContent[2].title}
          </h3>
          <h2 className={styles.contentSubtitles}>
            {displayContent && displayContent[2].subtitle}
          </h2>
          <p className={styles.contentText}>
            {displayContent && displayContent[2].text}
          </p>
          <button className={styles.findRentals}>Find Rentals</button>
        </div>
      </div>
    </div>
  );
}
