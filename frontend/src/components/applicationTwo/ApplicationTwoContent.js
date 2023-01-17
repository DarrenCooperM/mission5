import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/applicationTwo/ApplicationContentTwo.module.css";
import CurrentLandlord from "./applicationTwoComponents/CurrentLandlord/CurrentLandlord";
import LandlordPreferences from "./applicationTwoComponents/LandlordPreferences/LandlordPreferences";
import OtherReference from "./applicationTwoComponents/OtherReferences/OtherReference";
import Parking from "./applicationTwoComponents/Parking/Parking";
import { ProgressBar } from "../application/ProgressBar";
export default function ApplicationTwoContent() {
  let navigate = useNavigate();
  const applicationTwo = true;
  return (
    <>
      <ProgressBar applicationTwo={applicationTwo} />
      <div className={styles.applicationTwoContainer}>
        <CurrentLandlord />
        <LandlordPreferences />
        <OtherReference />
        <Parking />
        <div className={styles.btnContainer}>
          <button
            className={styles.backBtn}
            onClick={() => {
              navigate("/Application");
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
