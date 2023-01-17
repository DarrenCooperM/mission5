import React from "react";
import styles from "../../../styles/application/applicationComponents/CoApplicants.module.css";
import NonTenantOccupantsForm from "./NonTenantOccupantsForm";
import { useState } from "react";

export default function NonTenantOccupants() {
  const [addOccupant, setAddOccupant] = useState(false);

  const addingOccupant = () => {
    setAddOccupant(true);
  };
  return (
    <div className={styles.nonTenantContainer}>
      <h3 className={styles.CoAppTitle}>Other non-tenant occupants</h3>
      <p className={styles.CoAppSubTitle}>
        please name occupants who will not be on the tenancy agreement e.g.
        children
      </p>
      <form className={styles.formData}>
        <input
          type="text"
          name="fullname"
          className={styles.inputData}
          placeholder="Full Name"
        />
      </form>
      <button onClick={addingOccupant} className={addOccupant ? styles.hidden : styles.addBtn}>
        + Add Another Occupant
      </button>
      <div>
        {addOccupant && (
          <NonTenantOccupantsForm setAddOccupant={setAddOccupant} />
        )}{" "}
      </div>
    </div>
  );
}
