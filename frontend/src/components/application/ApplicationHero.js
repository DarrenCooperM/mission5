import React from "react";
import ApplicationHeroImg from "../images/applicationHero.PNG";
import styles from "../styles/application/ApplicationHero.module.css";

export default function ApplicationHero() {
  return (
    <div className={styles.ApplicationHeroContainer}>
      <img src={ApplicationHeroImg} className={styles.heroImg} alt="heroImg" />
    </div>
  );
}
