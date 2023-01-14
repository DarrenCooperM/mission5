import React from "react";
import styles from "../styles/contact/ContactContent.module.css";

export default function ContactContent() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentFeatures}>
        <div className={styles.leftContent}>
          <h3 className={styles.leftContentTitle}>Send us a message</h3>
          <p className={styles.leftContentText}>
            Thank you for getting in touch!
            <br />
            Kindly fill the form, have a great day!
          </p>
          <a href="/">
            <button className={styles.leftContentBtn}>Back</button>
          </a>
        </div>
        <div className={styles.rightContent}>
          <input
            className={styles.rightContentInputBox}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Your Name"
          />
          <input
            className={styles.rightContentInputBox}
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Your Email"
          />{" "}
          <br />
          <input
            className={styles.rightContentInputBox}
            type="text"
            name="number"
            autoComplete="off"
            placeholder="Phone Number"
          />{" "}
          <br />
          <input
            className={styles.rightContentMsgBox}
            type="text"
            name="message"
          />
        </div>
      </div>
    </div>
  );
}
