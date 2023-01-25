import React from "react";
import styles from "../../../styles/application/applicationComponents/PersonalDetails.module.css";

export default function PersonalDetails({ setUserInput }) {
  function handleUserInput(e) {
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  // handleUserInput not doing anything right now. Trying to figure out a way to collect the data and i
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
          onChange={handleUserInput}
        />
        <input
          type="text"
          className={styles.inputForm}
          name="lastname"
          autoComplete="off"
          placeholder="Last Name"
          required="required"
          onChange={handleUserInput}
        />
        <input
          type="number"
          className={styles.inputForm}
          name="mobile"
          autoComplete="off"
          placeholder="Mobile"
          required="required"
          onChange={handleUserInput}
        />
        <br />
        <input
          type="text"
          className={styles.inputEmail}
          name="email"
          autoComplete="off"
          placeholder="Email"
          required="required"
          onChange={handleUserInput}
        />
      </form>
    </div>
  );
}
