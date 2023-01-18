import React from "react";
import styles from "../styles/application/ProgressBar.module.css";

export const ProgressBar = ({ applicationLandlord, applicationPrivacy }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.circleContainer}>
        <span className={styles.circleFilled}>1</span>
      </div>
      <div className={styles.circleContainers}>
        <span
          className={applicationLandlord ? styles.circleFilled : styles.circle}
        >
          2
        </span>
      </div>
      <div className={styles.circleContainers}>
        <span
          className={applicationPrivacy ? styles.circleFilled : styles.circle}
        >
          3
        </span>
      </div>
      <span className={styles.solidLine}></span>
    </div>
  );
};
