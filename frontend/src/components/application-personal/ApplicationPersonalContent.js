import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../styles/application/ApplicationContent.module.css";
import PersonalDetails from "./applicationPersonalComponents/PersonalDetails/PersonalDetails";
import Identity from "./applicationPersonalComponents/ProofOfID/Identity";
import CoApplicants from "./applicationPersonalComponents/CoApplicants/CoApplicants";
import NonTenantOccupants from "./applicationPersonalComponents/NonTenantOccupants/NonTenantOccupants";
import OtherForms from "./applicationPersonalComponents/OtherForms/OtherForms";
import { ProgressBar } from "./ProgressBar";

export default function ApplicationPersonalContent() {
  // let navigate = useNavigate();

  return (
    <>
      <ProgressBar />
      <div className={styles.ApplicationContentContainer}>
        <PersonalDetails />
        <Identity />
        <CoApplicants />
        <NonTenantOccupants />
        <OtherForms />
        <div className={styles.btnContainer}>
          <a href="/">
            <button
              className={styles.backBtn}
              // onClick={() => {
              //   navigate("/");
              // }}
            >
              Back
            </button>{" "}
          </a>
          <a href="/Application-Landlord-Details">
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
