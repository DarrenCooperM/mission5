import React from "react";
import styles from "../../styles/rentals/NewRentals.module.css";
import bedImg from "../../icons/bed.png";
import bathImg from "../../icons/bath.png";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
// import { BiDumbbell } from "@react-icons/all-files/bi/BiDumbbell"
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Cards({ setOpenModal, displayCards }) {
  return (
    <div>
      <div className={styles.cardContainer}>
        {/* CARDS  */}
        {displayCards &&
          displayCards.map(function (data) {
            return (
              <div key={data.id} className={styles.card}>
                <div className={styles.cardSliderArrows}>
                  <ChevronLeft size={30} className={styles.left} />
                  <ChevronRight size={30} className={styles.right} />
                </div>
                <img
                  src={data.url}
                  className={styles.cardImg}
                  alt="propertyimage"
                />

                <div className={styles.cardProperty}>
                  <div className={styles.cardAvailPetContainer}>
                    <p className={styles.cardAvail}>
                      {data.available ? "Available" : "not available"}
                    </p>
                    <p className={styles.cardPets}>
                      {data.pets ? "Pet Friendly" : "No pets"}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className={styles.cardEmail}
                  >
                    <FiMail className={styles.cardEmailIcon} />
                    Email this Rental to me
                  </button>
                </div>
                <div className={styles.cardAddress}>{data.address}</div>
                <div className={styles.cardRent}>${data.rent} per week</div>
                <div className={styles.cardBottomContainer}>
                  <div>
                    <img
                      height="25"
                      src={bedImg}
                      alt="beds"
                      className={styles.bedIcon}
                    />
                    {data.beds}
                    <img
                      height="25"
                      src={bathImg}
                      alt="baths"
                      className={styles.bathIcon}
                    />
                    {data.baths}
                    {/* <div className={styles.gym}>{data.gym ? <BiDumbbell/> : null} </div> */}
                  </div>
                  <div className={styles.cardBtn}>
                    <a href="/Application-Personal-Details">
                      <button type="submit" className={styles.btnApply}>
                        Apply
                      </button>
                    </a>
                    <button type="submit" className={styles.btnRed}>
                      View More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
