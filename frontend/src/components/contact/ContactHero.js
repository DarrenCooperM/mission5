import React from "react";
import styles from "../styles/contact/ContactHero.module.css";
import contactImage from "../images/contactImage.PNG";

export default function ContactHero() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactFlex}>
        <div className={styles.contactContentContainer}>
          <h2 className={styles.contactTitle}>Discover us</h2>
          <p className={styles.contactText}>
            Our experts are available to answer any questions you might have.
            We've got the answers.
          </p>
          <h3 className={styles.contactDetails}>Call us</h3>
          <p className={styles.contactDetailsText}>09 391 4642</p>
          <h3 className={styles.contactDetails}>Email Us</h3>
          <p className={styles.contactDetailsText}>info@metronz.co.nz</p>
          <h3 className={styles.contactDetails}>Find us at</h3>
          <ul className={styles.contactDetailsList}>
            <li>Level 33, ANZ Centre, 23-29</li>
            <li>Albert St, Auckland 1010</li>
            <li>New Zealand</li>
          </ul>
        </div>
        <img
          className={styles.contactImage}
          src={contactImage}
          alt="contact images"
        />
      </div>
    </div>
  );
}
