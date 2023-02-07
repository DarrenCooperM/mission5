import React from "react";
import styles from "../../styles/rentals/Sort.module.css";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";

// MdKeyboardArrowDown

export default function Sort() {
  return (
    <div className={styles.sortContainer}>
      <button type="submit">Sort by: </button>
      <MdKeyboardArrowDown className={styles.icon} />
    </div>
  );
}
