import React from "react";
import styles from "../styles/applicationThree/ApplicationSubmission.module.css";

export default function ApplicationFourContent() {
  return (
    <div className={styles.submissionContainer}>
      {" "}
      <div className={styles.submissionTextContainer}>
        <h3 className={styles.submissionTitle}>
          Thank you for your application!
        </h3>
        <p className={styles.submissionText}>
          We have sent you a confirmation email.
        </p>
        <p className={styles.submissionText}>
          If you don't get an email in 15 minutes, please check your spam
        </p>
        <a href="/">
          <button className={styles.homeBtn}>Back to home</button>
        </a>{" "}
      </div>
    </div>
  );
}
