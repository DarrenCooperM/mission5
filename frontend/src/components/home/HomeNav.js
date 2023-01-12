import React from "react";
import navImg from "../images/navImg.png";
import styles from "../styles/Navbar.module.css";
import { FaSearch } from "react-icons/fa";

export default function HomeNav() {
  return (
    <>
      <header>
        <img className={styles.navImg} src={navImg} alt="navImg" />
        <nav>
          <ul class={styles.navbarLinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search all of Metro Property"
          ></input>
        </div>
      </header>
    </>
  );
}
