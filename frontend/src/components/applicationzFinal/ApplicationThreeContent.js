import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/applicationTwo/ApplicationContentTwo.module.css";
import { ProgressBar } from "../application/ProgressBar";

export default function ApplicationThreeContent() {
  let navigate = useNavigate();
  const applicationTwo = true;
  const applicationThree = true;

  return (
    <>
      <ProgressBar
        applicationThree={applicationThree}
        applicationTwo={applicationTwo}
      />
      <div className={styles.applicationThreeContainer}>
        <div className={styles.btnContainer}>
          <button
            className={styles.backBtn}
            onClick={() => {
              navigate("/Application-Page-Two");
            }}
          >
            Back
          </button>
          <button
            className={styles.nextBtn}
            onClick={() => {
              navigate("/Application-Page-Three");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
