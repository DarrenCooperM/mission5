import React from "react";
import navImg from "../images/navImg.png";
import styles from "../styles/home/Navbar.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function HomeNav() {
  const [dropdownMenu, setDropdownMenu] = useState({
    menu1: false,
    menu2: false,
  });
  const [is1Active, setIs1Active] = useState({
    active1: false,
    active2: false,
  });

  return (
    <>
      <div className={styles.navbarContainer}>
        <Link to="/">
          <img className={styles.navImg} src={navImg} alt="navImg" />
        </Link>
        <nav>
          <div class={styles.navbarLinks}>
            <Link to="/">
              <button>Home</button>
            </Link>
            <button
              onMouseEnter={() => {
                setDropdownMenu({
                  menu1: !dropdownMenu.menu1,
                });
                setIs1Active({
                  active1: !is1Active.active1,
                });
              }}
              onMouseLeave={() => {
                setDropdownMenu(false);
                setIs1Active(false);
              }}
            >
              Services
              {is1Active.active1 ? (
                <SlArrowUp className={styles.FaArrow}></SlArrowUp>
              ) : (
                <SlArrowDown className={styles.slarrow}></SlArrowDown>
              )}
              {dropdownMenu.menu1 && (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.dropdownContainer}>
                    <li>
                      <BsArrowRight />
                      <span className={styles.dropdownText}>
                        {" "}
                        Property Management
                      </span>
                    </li>
                    <li>
                      {" "}
                      <BsArrowRight />
                      <span className={styles.dropdownText}>
                        Building Management
                      </span>
                    </li>
                    <li>
                      {" "}
                      <BsArrowRight />
                      <span className={styles.dropdownText}>
                        Investment Property{" "}
                      </span>
                    </li>
                    <li>
                      {" "}
                      <BsArrowRight />
                      <span className={styles.dropdownText}>
                        Body Corporate Administration{" "}
                      </span>
                    </li>
                    <li>
                      {" "}
                      <BsArrowRight />
                      <span className={styles.dropdownText}>
                        Renovation Project Management{" "}
                      </span>
                    </li>
                    <li>
                      {" "}
                      <BsArrowRight />
                      <span className={styles.dropdownText}>Decluttering </span>
                    </li>
                    <li>
                      {" "}
                      <BsArrowRight />
                      <span className={styles.dropdownText}>Rental</span>
                    </li>{" "}
                  </ul>
                </div>
              )}
            </button>
            <Link to="/Contact">
              <button>Blog</button>
            </Link>
            <button
              onMouseEnter={() => {
                setDropdownMenu({
                  menu2: !dropdownMenu.menu2,
                });
                setIs1Active({
                  active2: !is1Active.active2,
                });
              }}
              onMouseLeave={() => {
                setDropdownMenu(false);
                setIs1Active(false);
              }}
            >
              About us
              {is1Active.active2 ? (
                <SlArrowUp className={styles.FaArrow}></SlArrowUp>
              ) : (
                <SlArrowDown className={styles.FaArrow}></SlArrowDown>
              )}
              {dropdownMenu.menu2 && (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.dropdownContainer}>
                    <li>
                      <BsArrowRight />
                      <span className={styles.dropdownText}>
                        Management Team{" "}
                      </span>
                    </li>
                    <li>
                      {" "}
                      <BsArrowRight />
                      <span className={styles.dropdownText}>Gallery </span>
                    </li>
                  </ul>
                </div>
              )}
            </button>
            <button>Gallery</button>
            <Link to="/Contact">
              <button>Contact</button>
            </Link>
          </div>
        </nav>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search all of Metro Property"
          ></input>
        </div>
      </div>
    </>
  );
}
