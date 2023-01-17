import React from "react";
import styles from "../../../styles/applicationTwo/applicationTwoComponents/Parking.module.css";
import { useState } from "react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import NumberPlate from "./NumberPlate";

export default function Parking() {
  const [addNumberPlate, setAddNumberPlate] = useState(false);

  const addingNumberPlate = () => {
    setAddNumberPlate(true);
  };

  return (
    <div className={styles.parkingContainer}>
      <h3 className={styles.parkingTitle}>Parking</h3>
      <p className={styles.parkingSubTitle}>
        This property has a restriction on parking. This could mean that there
        is no parking at the property or parking spaces are limited. Please
        provide the total number of vehicles (cars, boats, trailers etc), for
        the suitability of the property.
      </p>
      <h4 className={styles.parkingProperty}>
        Will you be parking on the property?
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
      <input
        type="text"
        name="number plate"
        className={styles.inputData}
        placeholder="Number Plate"
      />

      <br />
      <button
        onClick={addingNumberPlate}
        className={addNumberPlate ? styles.hidden : styles.addBtn}
      >
        <AiOutlinePlus />
        Add Another Number Plate
      </button>
      {addNumberPlate && <NumberPlate setAddNumberPlate={setAddNumberPlate} />}
    </div>
  );
}
