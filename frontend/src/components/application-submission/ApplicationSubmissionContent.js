import React from "react";
import styles from "../styles/application-submission/ApplicationSubmission.module.css";
import { useEffect } from "react";

export default function ApplicationSubmissionContent({ setFontSize }) {
  useEffect(() => {
    setFontSize(24);
  }, []);

  return (
    <div className={styles.submissionContainer}>
      <div className={styles.submissionTextContainer}>
        <h3
          // className={styles.submissionTitle}
          className={styles.title}
        >
          Thank you for your application!
        </h3>
        <p className={styles.submissionText}>
          We have sent you a confirmation email.
        </p>
        <p className={styles.submissionText}>
          If you don't get an email in 15 minutes, please check your spam
        </p>
        <div className={styles.btnContainer}>
          <a href="/Contact">
            <button className={styles.backBtn}>Go to Enquiries</button>
          </a>{" "}
          <a href="/">
            <button className={styles.homeBtn}>Back to home</button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
