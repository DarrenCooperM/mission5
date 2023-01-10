import React from "react";
import styles from "../styles/Contact.module.css";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

export default function HomeContact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Get in Touch</h1>
      <div className={styles.contacts}>
        <div className={styles.emailContainer}>
          <h3 className={styles.email}>Email us</h3>

          <h3 className={styles.emailAddress}>
            {" "}
            <span className={styles.icons}>
              {" "}
              <AiOutlineMail />
            </span>
            info@metronz.co.nz
          </h3>
        </div>
        <div className={styles.callContainer}>
          <h3 className={styles.call}>Call us</h3>

          <h3 className={styles.phNumber}>
            {" "}
            <span className={styles.icons}>
              {" "}
              <FaPhone />
            </span>
            09 391 4642
          </h3>
        </div>
      </div>
      <div className={styles.subscribe}>
        <p className={styles.subscribeText}>Subscribe to our newsletter</p>
        <input
          type="text"
          placeholder="Email Address"
          className={styles.subscribeInput}
        ></input>
        <button className={styles.subscribeBtn}>Subscribe</button>
      </div>
    </div>
  );
}
