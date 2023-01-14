import React from "react";
import Review from "./Review";
import styles from "../../styles/home/HomeSlider.module.css";

function HomeSlider() {
  return (
    <div className={styles.reviewContainer}>
      <h2 className={styles.reviewClients}>What Our Clients Say About Us</h2>
      <section className={styles.container}>
        <div children={styles.reviewTitle}>
          <div className={styles.reviewUnderline}></div>
        </div>
        <Review />
      </section>
    </div>
  );
}

export default HomeSlider;
