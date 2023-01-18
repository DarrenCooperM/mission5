import React from "react";
import styles from "../styles/home/Content.module.css";
// import aptImg from "../images/apt.png";
// import interior from "../images/interior.jpg";
// import rentals from "../images/rentals.jpg";
// import axios from "axios";
import { useState, useEffect } from "react";

export default function HomeContent() {
  // text content state
  const [displayContent, setDisplayContent] = useState("");
  // image state
  const [imageURL, setImageURL] = useState("");

  // getting text content from db
  useEffect(() => {
    fetch("http://localhost:7070/home-content/content-info")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayContent(resultsData);
      });
  }, []);

  // getting the image from db
  useEffect(() => {
    fetch("http://localhost:7070/home-content/home-content-images")
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        setImageURL(imageData);
      });
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentFeatures}>
        {/* first section  */}
        <img
          className={styles.contentImages}
          src={imageURL && imageURL[0].url}
          alt="aptImg"
        />
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
          <button className={styles.findAgent}>Learn more</button>
        </div>
        <img
          className={styles.contentImages}
          src={imageURL && imageURL[1].url}
          alt="aptImg"
        />
        {/* third section  */}
        <img
          className={styles.contentImages}
          src={imageURL && imageURL[2].url}
          alt="rental pic"
        />
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
          <a href="/Rentals">
            <button className={styles.findRentals}>Find Rentals</button>
          </a>
        </div>
      </div>
    </div>
  );
}
