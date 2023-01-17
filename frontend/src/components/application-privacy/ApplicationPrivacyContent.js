import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/application-landlord/ApplicationContentTwo.module.css";
import { ProgressBar } from "../application-personal/ProgressBar";

export default function ApplicationPrivacyContent() {
  let navigate = useNavigate();

  // updating state of progress bar
  const applicationLandlord = true;
  const applicationPrivacy = true;

  return (
    <>
      <ProgressBar
        applicationPrivacy={applicationPrivacy}
        applicationLandlord={applicationLandlord}
      />
      <div className={styles.applicationThreeContainer}>
        <div className={styles.btnContainer}>
          <button
            className={styles.backBtn}
            onClick={() => {
              navigate("/Application-Landlord-Details");
            }}
          >
            Back
          </button>
          <button
            className={styles.nextBtn}
            onClick={() => {
              navigate("/Application-Submission-Confirmation");
            }}
          >
            Submit Application
          </button>
        </div>
      </div>
    </>
  );
}
