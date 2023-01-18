import React from "react";
import styles from "../../../styles/application-landlord/applicationTwoComponents/Parking.module.css";

export default function AdditionalNotes() {
  return (
    <div className={styles.parkingContainer}>
      <h3 className={styles.parkingTitle}>Additional Notes</h3>
      <p className={styles.parkingSubTitle}>
        What other information should we know about you that would help support
        your application?
      </p>
      <div className={styles.radioBtnsContainer}>
        <input
          type="text"
          name="Additional Notes"
          className={styles.inputPetDescription}
          placeholder="Additional Notes"
        />
      </div>
    </div>
  );
}
