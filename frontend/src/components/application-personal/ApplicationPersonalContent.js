import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../styles/application/ApplicationContent.module.css";
import PersonalDetails from "./applicationPersonalComponents/PersonalDetails/PersonalDetails";
import Identity from "./applicationPersonalComponents/ProofOfID/Identity";
import CoApplicants from "./applicationPersonalComponents/CoApplicants/CoApplicants";
import NonTenantOccupants from "./applicationPersonalComponents/NonTenantOccupants/NonTenantOccupants";
import OtherForms from "./applicationPersonalComponents/OtherForms/OtherForms";
import { ProgressBar } from "./ProgressBar";
import { useState } from "react";

export default function ApplicationPersonalContent() {
  const [userInput, setUserInput] = useState({});

  const handleSubmit = (e) => {
    console.log(userInput);
    alert("success");
  };

  return (
    <>
      <ProgressBar />
      <div className={styles.ApplicationContentContainer}>
        <PersonalDetails setUserInput={setUserInput} />
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
            <button className={styles.nextBtn} onSubmit={handleSubmit}>
              Next
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
