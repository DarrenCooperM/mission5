import React from "react";
import navImg from "../../images/navImg.png";
import styles from "../../styles/home/Navbar.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import ServicesDropdown from "./NavComponents/ServicesDropdown";
import AboutUsDropdown from "./NavComponents/AboutUsDropdown";

export default function HomeNav() {
  const [dropdownMenu, setDropdownMenu] = useState({
    menu1: false,
    menu2: false,
  });
  const [is1Active, setIs1Active] = useState({
    active1: false,
    active2: false,
  });

  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={styles.navbarContainer}>
        <Link to="/">
          <img className={styles.navImg} src={navImg} alt="navImg" />
        </Link>
        <nav>
          <div class={active ? styles.navBtnsActive : styles.navbarLinks}>
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
              Services{" "}
              <SlArrowDown
                className={
                  is1Active.active1
                    ? styles.slarrow + " " + styles.slarrowActive
                    : styles.slarrow
                }
              />
              {dropdownMenu.menu1 && <ServicesDropdown />}
            </button>
            <button>Blog</button>
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
              <SlArrowDown
                className={
                  is1Active.active2
                    ? styles.slarrow + " " + styles.slarrowActive
                    : styles.slarrow
                }
              />
              {dropdownMenu.menu2 && <AboutUsDropdown />}
            </button>
            <button>Gallery</button>
            <Link to="/Contact">
              <button>Contact</button>
            </Link>
          </div>
          <div
            className={active ? styles.hamburgerActive : styles.hamburger}
            onClick={() => {
              toggle();
            }}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
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
