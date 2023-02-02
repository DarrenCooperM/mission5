import React from "react";
import styles from "../styles/home/Content.module.css";

export default function HomeContent({ displayContent }) {
  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.contentFeatures}>
          {/* first section  */}
          <img
            className={styles.contentImages}
            src={displayContent && displayContent[0].url}
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
              <span className={styles.midText}>
                {displayContent && displayContent[1].subtitle}
              </span>
            </h2>

            <p className={styles.contentText}>
              {displayContent && displayContent[1].text}
            </p>
            <a href="/Property-Management">
              <button className={styles.findAgent}>Learn more</button>
            </a>
          </div>
          <span className={styles.midImg}>
            <img
              className={styles.contentImages}
              src={displayContent && displayContent[1].url}
              alt="aptImg"
            />
          </span>
          {/* third section  */}
          <img
            className={styles.contentImages}
            src={displayContent && displayContent[2].url}
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
    </>
  );
}
