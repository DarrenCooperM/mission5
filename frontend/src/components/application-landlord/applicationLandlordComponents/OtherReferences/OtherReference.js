import React from "react";
import styles from "../../../styles/application-landlord/applicationTwoComponents/CurrentLandlord.module.css";
import OtherReferencesForm from "./OtherReferencesForm";
import { useState } from "react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

export default function OtherReference() {
  const [addRef, setAddRef] = useState(false);

  const addingRef = () => {
    setAddRef(true);
  };
  return (
    <div className={styles.currentLandlordContainer}>
      <h3 className={styles.landlordTitle}>Other References</h3>
      <p className={styles.landlordSubTitle}>
        Other references e.g. manager, supervisor, case manager, or other
        professional references
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
      </form>
      <button
        onClick={addingRef}
        className={addRef ? styles.hidden : styles.addBtn}
      >
        <AiOutlinePlus />
        Add Another Reference
      </button>
      {addRef && <OtherReferencesForm setAddRef={setAddRef} />}
    </div>
  );
}
