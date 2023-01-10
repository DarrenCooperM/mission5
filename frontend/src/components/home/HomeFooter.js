import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

export default function HomeFooter() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.socialsIcons}>
        <FaFacebook className={styles.facebook} />
        <BsInstagram className={styles.instagram} />
      </div>
      <div className={styles.copyright}>
        <BiCopyright />
        2022 MetroNZ
      </div>
    </div>
  );
}
