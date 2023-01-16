import React from "react";
import navImg from "../images/navImg.png";
import styles from "../styles/home/Navbar.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function HomeNav() {
  // dropdown menu for 'services' button
  const [menu1Open, setmenu1Open] = useState(false);
  // dropdown menu for 'About us' button
  const [menu2Open, setmenu2Open] = useState(false);
  // arrow animation state for 'services' button
  const [is1Active, setIs1Active] = useState(false);
  // arrow animation state for 'About us' button
  const [is2Active, setIs2Active] = useState(false);
  // let navigate = useNavigate();

  // function for changing the state of the arrow
  function clickedArrow() {
    setIs1Active(!is1Active);
    setIs2Active(!is2Active);
  }
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
                    <Link to="/Contact">
                      <li>
                        {" "}
                        <BsArrowRight />
                        <span className={styles.dropdownText}>Rental</span>
                      </li>{" "}
                    </Link>
                  </ul>
                </div>
              )}
            </button>
            <Link to="/Contact">
              <button>Blog</button>
            </Link>
            <button
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
            <Link to="/Mission-Task">
              <button>Mission Task</button>
            </Link>
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
