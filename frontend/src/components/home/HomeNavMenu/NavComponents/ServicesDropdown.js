import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "../../../styles/home/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div className={styles.dropdownMenu}>
      <ul className={styles.dropdownContainer}>
        <Link to="/Property-Management" style={{ textDecoration: "none" }}>
          <li>
            <BsArrowRight />
            <span className={styles.dropdownText}> Property Management</span>
          </li>
        </Link>
        <li>
          {" "}
          <BsArrowRight />
          <span className={styles.dropdownText}>Building Management</span>
        </li>
        <li>
          {" "}
          <BsArrowRight />
          <span className={styles.dropdownText}>Investment Property </span>
        </li>
        <li>
          {" "}
          <BsArrowRight />
          <span className={styles.dropdownText}>
            Body Corporate Administration{" "}
          </span>
        </li>
        <li>
          {" "}
          <BsArrowRight />
          <span className={styles.dropdownText}>
            Renovation Project Management{" "}
          </span>
        </li>
        <li>
          {" "}
          <BsArrowRight />
          <span className={styles.dropdownText}>Decluttering </span>
        </li>
        <li>
          {" "}
          <BsArrowRight />
          <span className={styles.dropdownText}>Rental</span>
        </li>{" "}
      </ul>
    </div>
  );
}
