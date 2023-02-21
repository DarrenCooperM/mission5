import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "../../../styles/home/Navbar.module.css";

export default function AboutUsDropdown() {
  return (
    <div className={styles.dropdownMenu}>
      <ul className={styles.dropdownContainer}>
        <li>
          <BsArrowRight />
          <span className={styles.dropdownText}>Management Team </span>
        </li>
        <li>
          {" "}
          <BsArrowRight />
          <span className={styles.dropdownText}>Gallery </span>
        </li>
      </ul>
    </div>
  );
}
