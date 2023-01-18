import React from "react";
import styles from "../../../styles/application-landlord/applicationTwoComponents/Parking.module.css";

export default function Pets() {
  return (
    <div className={styles.parkingContainer}>
      <h3 className={styles.parkingTitle}>Pets</h3>
      <p className={styles.parkingSubTitle}>
        This property has a restriction on Pets.
        <br />
        This could mean that no pets are permitted or that the type and number
        of pets is restricted. If you have a pet or pets it is important that
        you disclose this to the property manager so they can see if your pet
        fits within the restrictions for this property.
        <br />
        Please add a description of each pet that will be living at the property
      </p>
      <h4 className={styles.parkingProperty}>Is your pet registered?</h4>
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
      <div className={styles.petInputContainer}>
        <input
          type="text"
          name="pet name"
          className={styles.inputData}
          placeholder="Pet's Name"
        />
        <input
          type="text"
          name="type"
          className={styles.inputData}
          placeholder="Type"
        />
        <input
          type="text"
          name="breed"
          className={styles.inputData}
          placeholder="Breed"
        />
        <input
          type="text"
          name="age"
          className={styles.inputData}
          placeholder="Age"
        />
        <br />
        <input
          type="text"
          name="pet desciption"
          className={styles.inputPetDescription}
          placeholder="Tell us about your pet"
        />
      </div>
    </div>
  );
}
