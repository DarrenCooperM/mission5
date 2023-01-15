import React from "react";
import navImg from "../images/navImg.png";
import styles from "../styles/home/Navbar.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export default function HomeNav() {
  const [menu1Open, setmenu1Open] = useState(false);
  const [menu2Open, setmenu2Open] = useState(false);
  const [is1Active, setIs1Active] = useState(false);
  const [is2Active, setIs2Active] = useState(false);
  let navigate = useNavigate();

  function clickedArrow() {
    setIs1Active(!is1Active);
    setIs2Active(!is2Active);
  }
  return (
    <>
      <div className={styles.navbarContainer}>
        <a href="/">
          <img className={styles.navImg} src={navImg} alt="navImg" />
        </a>
        <nav>
          <ul class={styles.navbarLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setmenu1Open(true);
                  setIs1Active(true);
                }}
                onMouseLeave={() => {
                  setmenu1Open(false);
                  setIs1Active(false);
                }}
              >
                Services
                {is1Active ? (
                  <SlArrowUp
                    className={styles.FaArrow}
                    onClick={clickedArrow}
                  ></SlArrowUp>
                ) : (
                  <SlArrowDown
                    className={styles.FaArrow}
                    onClick={clickedArrow}
                  ></SlArrowDown>
                )}
                {menu1Open && (
                  <div className={styles.dropdownMenu}>
                    <ul className={styles.dropdownContainer}>
                      <li>
                        <BsArrowRight />
                        Property Management
                      </li>
                      <li>
                        {" "}
                        <BsArrowRight />
                        Building Management
                      </li>
                      <li>
                        {" "}
                        <BsArrowRight />
                        Investment Property
                      </li>
                      <li>
                        {" "}
                        <BsArrowRight />
                        Body Corporate Administration
                      </li>
                      <li>
                        {" "}
                        <BsArrowRight />
                        Renovation Project Management
                      </li>
                      <li>
                        {" "}
                        <BsArrowRight />
                        Decluttering
                      </li>
                      <li onClick={() => navigate("/Contact")}>
                        {" "}
                        <BsArrowRight />
                        Rental
                      </li>
                    </ul>
                  </div>
                )}
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setmenu2Open(true);
                  setIs2Active(true);
                }}
                onMouseLeave={() => {
                  setmenu2Open(false);
                  setIs2Active(false);
                }}
              >
                About us
                {is2Active ? (
                  <SlArrowUp
                    className={styles.FaArrow}
                    onClick={clickedArrow}
                  ></SlArrowUp>
                ) : (
                  <SlArrowDown
                    className={styles.FaArrow}
                    onClick={clickedArrow}
                  ></SlArrowDown>
                )}
                {menu2Open && (
                  <div className={styles.dropdownMenu}>
                    <ul className={styles.dropdownContainer}>
                      <li>
                        <BsArrowRight />
                        Management Team
                      </li>
                      <li>
                        {" "}
                        <BsArrowRight />
                        Gallery
                      </li>
                    </ul>
                  </div>
                )}
              </a>
            </li>
            <li>
              <a href="/Mission-Task">Mission Task</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
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
      </div>
    </>
  );
}
