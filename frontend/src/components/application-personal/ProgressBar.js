import React from "react";
import styles from "../styles/application/ProgressBar.module.css";

export const ProgressBar = ({ applicationTwo, applicationThree }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.circleContainer}>
        <span className={styles.circleFilled}>1</span>
      </div>
      <div className={styles.circleContainers}>
        <span className={applicationTwo ? styles.circleFilled : styles.circle}>
          2
        </span>
      </div>
      <div className={styles.circleContainers}>
        <span
          className={applicationThree ? styles.circleFilled : styles.circle}
        >
          3
        </span>
      </div>
      <span className={styles.solidLine}></span>
    </div>
  );
};
