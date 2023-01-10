import React from "react";
import styles from "../styles/Content.module.css";
import aptImg from "../images/apt.png";
import interior from "../images/interior.jpg";
import rentals from "../images/rentals.jpg";

// need to find a way to center the content below and its veering off to the left a bit. idk why

export default function HomeContent() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentFeatures}>
        {/* first section  */}
        <img className={styles.contentImages} src={aptImg} alt="aptImg" />
        <div className={styles.contentSection}>
          <h3 className={styles.contentTitles}>For Investors</h3>
          <h2 className={styles.contentSubtitles}>
            Investment property management
          </h2>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className={styles.findAgent}>Find An Agent</button>
        </div>
        {/* second section  */}

        <div className={styles.contentSection}>
          <h3 className={styles.contentTitles}>For Landlords</h3>
          <h2 className={styles.contentSubtitles}>Property Management</h2>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className={styles.findAgent}>Find An Agent</button>
        </div>
        <img className={styles.contentImages} src={interior} alt="interior" />
        {/* third section  */}
        <img className={styles.contentImages} src={rentals} alt="rentals" />
        <div className={styles.contentSection}>
          <h3 className={styles.contentTitles}>For Renters</h3>
          <h2 className={styles.contentSubtitles}>Find Your Next Home</h2>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className={styles.findRentals}>Find Rentals</button>
        </div>
      </div>
    </div>
  );
}
