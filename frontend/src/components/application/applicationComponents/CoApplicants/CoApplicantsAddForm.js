import React from "react";
import styles from "../../../styles/application/applicationComponents/CoApplicants.module.css";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

export default function CoApplicantsAddForm({ setAddApplicant }) {
  const cancelApplicant = () => {
    setAddApplicant(false);
  };
  return (
    <div className={styles.CoApplicantContainer}>
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
        <input
          type="text"
          name="email"
          className={styles.inputEmail}
          placeholder="Email"
        />
      </form>
      <button onClick={() => cancelApplicant()} className={styles.addBtn}>
        <AiOutlineMinus /> Cancel Additional Applicant
      </button>
    </div>
  );
}
