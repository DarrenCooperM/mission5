import React from "react";
import styles from "../../../styles/applicationTwo/applicationTwoComponents/CurrentLandlord.module.css";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

export default function LandlordPreferencesForm({ setAddLandlord }) {
  const cancelLandlord = () => {
    setAddLandlord(false);
  };
  return (
    <div>
      {" "}
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
      <button onClick={cancelLandlord} className={styles.addBtn}>
        <AiOutlineMinus />
        Cancel Landlord Reference
      </button>
    </div>
  );
}
