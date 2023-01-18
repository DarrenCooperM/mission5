import React from "react";
import styles from "../../../styles/application/applicationComponents/OtherForms.module.css";

export default function OtherForms() {
  return (
    <div className={styles.formsContainer}>
      <h3 className={styles.formstitle}>Your preferred move in date</h3>
      <input
        type="date"
        placeholder="please select"
        className={styles.inputData}
      />
      <h3 className={styles.formstitle}>Preferred tenancy type</h3>
      <input
        type="text"
        placeholder="please select"
        className={styles.inputData}
      />
      <h3 className={styles.formstitle}>
        How long do you want the property for?
      </h3>
      <input
        type="text"
        placeholder="please select"
        className={styles.inputData}
      />
      <h3 className={styles.formstitle}>Have you viewed the property?</h3>
      <input
        type="text"
        placeholder="please select"
        className={styles.inputData}
      />
    </div>
  );
}
