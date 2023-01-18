import React from "react";
import styles from "../../../styles/application/applicationComponents/CoApplicants.module.css";
import CoApplicantsAddForm from "./CoApplicantsAddForm";
import { useState } from "react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

export default function CoApplicants() {
  const [addApplicant, setAddApplicant] = useState(false);

  const addingApplicant = () => {
    setAddApplicant(true);
  };
  return (
    <div className={styles.CoApplicantsContainer}>
      <h3 className={styles.CoAppTitle}>Co-applicants</h3>
      <form className={styles.formData}>
        <input
          type="text"
          name="firstname"
          className={styles.inputData}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          className={styles.inputData}
          placeholder="Last Name"
        />
        <input
          type="number"
          name="mobile"
          className={styles.inputData}
          placeholder="Mobile"
        />
        <br />
        <input
          type="text"
          name="email"
          className={styles.inputEmail}
          placeholder="Email"
        />
      </form>
      <button
        onClick={addingApplicant}
        className={addApplicant ? styles.hidden : styles.addBtn}
      >
        <AiOutlinePlus /> Add Another Applicant
      </button>
      <div>
        {addApplicant && (
          <CoApplicantsAddForm setAddApplicant={setAddApplicant} />
        )}{" "}
      </div>
    </div>
  );
}
