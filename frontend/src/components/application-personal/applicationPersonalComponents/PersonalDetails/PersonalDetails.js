import React from "react";
import styles from "../../../styles/application/applicationComponents/PersonalDetails.module.css";

export default function PersonalDetails() {
  return (
    <div className={styles.personalDetailsContainer}>
      <h3 className={styles.personalDetailsTitle}>Personal Details</h3>
      <form className={styles.formData}>
        <input
          type="text"
          className={styles.inputForm}
          name="firstname"
          autoComplete="off"
          placeholder="First Name"
          required="required"
        />
        <input
          type="text"
          className={styles.inputForm}
          name="lastname"
          autoComplete="off"
          placeholder="Last Name"
          required="required"
        />
        <input
          type="number"
          className={styles.inputForm}
          name="mobile"
          autoComplete="off"
          placeholder="Mobile"
          required="required"
        />
        <br />
        <input
          type="text"
          className={styles.inputEmail}
          name="email"
          autoComplete="off"
          placeholder="Email"
          required="required"
        />
      </form>
    </div>
  );
}
