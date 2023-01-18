import React from "react";
import styles from "../../../styles/application/applicationComponents/CoApplicants.module.css";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

export default function NonTenantOccupantsForm({ setAddOccupant }) {
  const cancelOccupant = () => {
    setAddOccupant(false);
  };
  return (
    // STYLES IN COAPPLICANTS.MODULE.CSS
    <div className={styles.nonTenantContainerForm}>
      <h3 className={styles.nonTenantFormTitle}>Additional occupant</h3>
      <form className={styles.formData}>
        <input
          type="text"
          name="fullname"
          className={styles.inputData}
          placeholder="Full Name"
          autoComplete="off"
        />
      </form>
      <button onClick={() => cancelOccupant()} className={styles.addBtn}>
        <AiOutlineMinus />
        Cancel Additional Occupant
      </button>
    </div>
  );
}
