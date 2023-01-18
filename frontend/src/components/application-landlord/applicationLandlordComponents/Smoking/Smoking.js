import React from "react";
import styles from "../../../styles/application-landlord/applicationTwoComponents/Parking.module.css";

export default function Smoking() {
  return (
    <div className={styles.parkingContainer}>
      <h3 className={styles.parkingTitle}>Smoking</h3>
      <p className={styles.parkingSubTitle}>
        This property has a restriction on smoking.
        <br />
        This could mean that smoking is not permitted or restricted to certain
        areas. If you or any of the occupants are smokers, it is important that
        you disclose this to the property manager.
      </p>
      <h4 className={styles.parkingProperty}>
        Are you or the other occupants smokers?
      </h4>
      <div className={styles.radioBtnsContainer}>
        <input
          type="checkbox"
          id="yes"
          name="yes"
          value="yes"
          className={styles.radioBtns}
        />
        <label for="yes" className={styles.radioLabel}>
          Yes
        </label>
        <br />
        <input
          type="checkbox"
          id="No"
          name="No"
          value="No"
          className={styles.radioBtns}
        />
        <label for="yes" className={styles.radioLabel}>
          No
        </label>{" "}
      </div>
    </div>
  );
}
