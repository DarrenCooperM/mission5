import React from "react";
import PropertyArray from "./PropertyManagementComponents/PropertyManagementArray";
import styles from "../styles/PropertyManagement/PropertyManagement.module.css";

export default function PropsManage() {
  return (
    <div className={styles.propertyContainer}>
      <h1 className={styles.title}>Property Management</h1>
      <div className={styles.contentFeatures}>
        {/* first section  */}
        <img className={styles.images} src={PropertyArray[0].image} />
        <div className={styles.textContent}>
          <h3>{PropertyArray[0].title}</h3>
          <p className={styles.text}>{PropertyArray[0].text} </p>
        </div>
        {/* second section  */}
        <div className={styles.textContent}>
          <h3>{PropertyArray[1].title}</h3>
          <p className={styles.text}>{PropertyArray[1].text} </p>
        </div>
        <img className={styles.images} src={PropertyArray[1].image} />
        {/* third section  */}
        <img className={styles.images} src={PropertyArray[2].image} />
        <div className={styles.textContent}>
          <h3>{PropertyArray[2].title}</h3>
          <p className={styles.text}>{PropertyArray[2].text} </p>
        </div>
        {/* Fourth section  */}
        <div className={styles.textContent}>
          <h3>{PropertyArray[3].title}</h3>
          <p className={styles.text}>{PropertyArray[3].text} </p>
        </div>
        <img className={styles.images} src={PropertyArray[3].image} />
        {/* fifth section  */}
        <img className={styles.images} src={PropertyArray[4].image} />
        <div className={styles.textContent}>
          <h3>{PropertyArray[4].title}</h3>
          <p className={styles.text}>{PropertyArray[4].text} </p>
        </div>
        {/* sixth section  */}
        <div className={styles.textContent}>
          <h3>{PropertyArray[5].title}</h3>
          <p className={styles.text}>{PropertyArray[5].text} </p>
        </div>
        <img className={styles.images} src={PropertyArray[5].image} />
        {/* seventh section  */}
        <img className={styles.images} src={PropertyArray[6].image} />
        <div className={styles.textContent}>
          <h3>{PropertyArray[6].title}</h3>
          <p className={styles.text}>{PropertyArray[6].text} </p>
        </div>
      </div>
    </div>
  );
}
