import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/applicationTwo/ApplicationContentTwo.module.css";
import CurrentLandlord from "./applicationTwoComponents/CurrentLandlord/CurrentLandlord";
import LandlordPreferences from "./applicationTwoComponents/LandlordPreferences/LandlordPreferences";
import OtherReference from "./applicationTwoComponents/OtherReferences/OtherReference";

export default function ApplicationTwoContent() {
  let navigate = useNavigate();
  return (
    <div className={styles.applicationTwoContainer}>
      <CurrentLandlord />
      <LandlordPreferences />
      <OtherReference />
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
          navigate("/Contact");
        }}
      >
        Next
      </button></div>
    </div>
  );
}
