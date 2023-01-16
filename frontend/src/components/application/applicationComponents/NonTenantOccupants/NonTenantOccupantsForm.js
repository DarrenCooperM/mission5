import React from "react";
import styles from "../../../styles/application/applicationComponents/CoApplicants.module.css";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

export default function NonTenantOccupantsForm({ setAddOccupant }) {
  const cancelOccupant = () => {
    setAddOccupant(false);
  };
  return (
    <div className={styles.nonTenantContainerForm}>
      <form className={styles.formData}>
        <input
          type="text"
          name="fullname"
          className={styles.inputData}
          placeholder="Full Name"
        />
      </form>
      <button onClick={() => cancelOccupant()} className={styles.addBtn}>
        <AiOutlineMinus />
        Cancel Additional Occupant
      </button>
    </div>
  );
}
