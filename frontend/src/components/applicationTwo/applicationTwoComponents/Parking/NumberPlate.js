import React from "react";
import styles from "../../../styles/applicationTwo/applicationTwoComponents/Parking.module.css";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

export default function NumberPlate({ setAddNumberPlate }) {
  const cancelNumberPlate = () => {
    setAddNumberPlate(false);
  };
  return (
    <div>
      <h3 className={styles.parkingFormsTitle}>Additional Number Plate</h3>
      <br />
      <input
        type="text"
        name="number plate"
        className={styles.inputData}
        placeholder="Enter Number Plate"
      />
      <br />
      <button onClick={cancelNumberPlate} className={styles.addBtn}>
        <AiOutlineMinus />
        Cancel Number Plate
      </button>
    </div>
  );
}
