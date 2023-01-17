import React from "react";
import styles from "../../../styles/applicationTwo/applicationTwoComponents/CurrentLandlord.module.css";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

export default function OtherReferencesForm({ setAddRef }) {
  const cancelRef = () => {
    setAddRef(false);
  };
  return (
    <>
      <h3 className={styles.landlordFormTitle}>Additional Reference</h3>
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
      </form>
      <button onClick={cancelRef} className={styles.addBtn}>
        <AiOutlineMinus />
        Cancel Reference
      </button>
    </>
  );
}
