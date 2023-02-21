import React from "react";
import styles from "../styles/home/Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

export default function HomeFooter() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerFlex}>
        <div className={styles.footerContent}>
          <div className={styles.contentContainers}>
            <h3>Services</h3>
            <div className={styles.footerText}>
              <a href="/Property-Management" style={{ textDecoration: "none" }}>
                <li>Property Management</li>
              </a>
              <li>Building Management</li>
              <li>Investment Property</li>
              <li>Body Corporate Administration</li>
              <li>Renovation Project Management</li>
              <li>Decluttering</li>
              <li>Rental</li>
            </div>
          </div>
        </div>

        <div className={styles.footerContent}>
          <div className={styles.contentContainers}>
            <h3>About Us</h3>
            <div className={styles.footerText}>
              <li>Management Team</li>
              <li>Gallery</li>
            </div>
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.contentContainers}>
            <h3>Blog</h3>
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.contentContainers}>
            <h3>Join us</h3>
          </div>
        </div>

        <div className={styles.footerContent}>
          <div className={styles.contentContainers}>
            <a href="/Contact" style={{ textDecoration: "none" }}>
              <h3>Contact</h3>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.socialsIcons}>
          <FaFacebook className={styles.facebook} />
          <BsInstagram className={styles.instagram} />
        </div>
        <div className={styles.copyright}>
          <BiCopyright />
          2022 MetroNZ
        </div>
      </div>
    </div>
  );
}
