import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/application/ApplicationContent.module.css";
import PersonalDetails from "./applicationComponents/PersonalDetails/PersonalDetails";
import Identity from "./applicationComponents/ProofOfID/Identity";
import CoApplicants from "./applicationComponents/CoApplicants/CoApplicants";
import NonTenantOccupants from "./applicationComponents/NonTenantOccupants/NonTenantOccupants";
import OtherForms from "./applicationComponents/OtherForms/OtherForms";

export default function ApplicationContent() {
  let navigate = useNavigate();
  return (
    <div className={styles.ApplicationContentContainer}>
      <PersonalDetails />
      <Identity />
      <CoApplicants />
      <NonTenantOccupants />
      <OtherForms />
      <div className={styles.btnContainer}>
        <button
          className={styles.backBtn}
          onClick={() => {
            navigate("/");
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
        </button>
      </div>
    </div>
  );
}
