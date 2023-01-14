import React from "react";
import styles from "../styles/home/Brands.module.css";
import qcl from "../icons/qcl.jpg";
import westpac from "../icons/westpac.png";
import rea from "../icons/rea.png";

export default function HomeBrands() {
  return (
    // need to get access to icons to finish this section
    <div className={styles.brandsContainer}>
      <div className={styles.brandsFeatures}>
        <img className={styles.brands} src={qcl} alt="qcl" />
        <img className={styles.brands} src={westpac} alt="westpac" />
        <img className={styles.brands} src={rea} alt="rea" />
      </div>
    </div>
  );
}
