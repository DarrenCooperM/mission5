import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../styles/application-landlord/ApplicationContentTwo.module.css";
import CurrentLandlord from "./applicationLandlordComponents/CurrentLandlord/CurrentLandlord";
import LandlordPreferences from "./applicationLandlordComponents/LandlordPreferences/LandlordPreferences";
import OtherReference from "./applicationLandlordComponents/OtherReferences/OtherReference";
import Parking from "./applicationLandlordComponents/Parking/Parking";
import Pets from "./applicationLandlordComponents/Pets/Pets";
import Smoking from "./applicationLandlordComponents/Smoking/Smoking";
import AdditionalNotes from "./applicationLandlordComponents/AdditionalNotes/AdditionalNotes";
import { ProgressBar } from "../application-personal/ProgressBar";

export default function ApplicationLandlordContent() {
  // let navigate = useNavigate();

  // updating the state of the progress bar
  const applicationLandlord = true;
  return (
    <>
      <ProgressBar applicationLandlord={applicationLandlord} />
      <div className={styles.applicationTwoContainer}>
        <CurrentLandlord />
        <LandlordPreferences />
        <OtherReference />
        <Parking />
        <Pets />
        <Smoking />
        <AdditionalNotes />
        <div className={styles.btnContainer}>
          <a href="/Application-Personal-Details">
            <button
              className={styles.backBtn}
              // onClick={() => {
              //   navigate("/");
              // }}
            >
              Back
            </button>{" "}
          </a>
          <a href="/Application-Privacy-Statements">
            <button
              className={styles.nextBtn}
              // onClick={() => {
              //   navigate("/Application-page-two");
              // }}
            >
              Next
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
