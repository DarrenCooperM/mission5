import React from "react";
import styles from "../../../styles/applicationTwo/applicationTwoComponents/CurrentLandlord.module.css";

export default function CurrentLandlord() {
  return (
    <div className={styles.currentLandlordContainer}>
      <h3 className={styles.landlordTitle}>Previous Landlord References</h3>
      <p className={styles.landlordSubTitle}>
        The purpose of collecting this information is to conduct a reference
        check to determine your suitability as a tenant
      </p>
      <form className={styles.formData}>
        <input
          type="text"
          name="Address"
          className={styles.inputData}
          placeholder="Address"
        />
        <input
          type="text"
          name="Landlord name"
          className={styles.inputData}
          placeholder="Landlord/Agent Name"
        />
        <input
          type="number"
          name="Landlord Mobile"
          className={styles.inputData}
          placeholder="Landlord/Agent Mobile"
        />
        <input
          type="text"
          name="Landlord Email"
          className={styles.inputData}
          placeholder="Landlord/Agent Email"
        />
      </form>
    </div>
  );
}
