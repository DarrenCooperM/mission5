import React from "react";
import styles from "../../../styles/applicationTwo/applicationTwoComponents/CurrentLandlord.module.css";
import LandlordPreferencesForm from "./LandlordPreferencesForm";
import { useState } from "react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

export default function LandlordPreferences() {
  const [addLandlord, setAddLandlord] = useState(false);

  const addingLandlord = () => {
    setAddLandlord(true);
  };

  return (
    <div className={styles.currentLandlordContainer}>
      <h3 className={styles.landlordTitle}>Current Landlord</h3>
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
      </form>
      <button onClick={addingLandlord} className={styles.addBtn}>
        <AiOutlinePlus />
        Add Another Landlord Reference
      </button>
      {addLandlord && (
        <LandlordPreferencesForm setAddLandlord={setAddLandlord} />
      )}
    </div>
  );
}
