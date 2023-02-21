import React from "react";
import styles from "../../styles/rentals/Filter.module.css";
import Sort from "./Sort";

export default function Filter() {
  return (
    <>
      <div className={styles.filterContainer}>
        <div className={styles.suburb}>
          <input type="text" placeholder="Find Surburb or Region" />
        </div>
        <div className={styles.filterMapSearch}>
          <p>Filter</p>
          <p>Map</p>
          <p>Search</p>
        </div>
      </div>
      <Sort />
    </>
  );
}
