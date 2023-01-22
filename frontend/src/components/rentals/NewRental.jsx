import React from 'react'
import { useState, useEffect } from "react";
import styles from '../styles/rentals/NewRentals.module.css'
import bedImg from "../icons/bed.png";
import bathImg from "../icons/bath.png";
import { FiMail } from '@react-icons/all-files/fi/FiMail'

export default function NewRental({setOpenModal}) {

        // text content state
    const [displayContent, setDisplayContent] = useState("");
    // image state
    const [imageURL, setImageURL] = useState("");

      // getting content from db
  useEffect(() => {
    fetch("http://localhost:7070/rental/rental")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayContent(resultsData);
      });
  }, []);

  // getting the image from db
  useEffect(() => {
    fetch("http://localhost:7070/home-content/home-content-images")
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        setImageURL(imageData);
      });
  }, []);

  return (<>
    <div className={styles.rentalContaier}>
            <div className={styles.cardContainer}>
                {/* CARDS  */}
              {displayContent && displayContent.map(function (data) {
                return (<div key={data.id} className={styles.card}>
                    
                    <img src={data.url} className={styles.avatar}/>
                    <div className={styles.cardProperty}>
                        <div className={styles.cardAvailPetContainer}>
                        <p className={styles.cardAvail}>Available</p>
                        <p className={styles.cardPets}>Pets Allowed</p>
                        </div>
                        <button         
                        onClick={() => {
                    setOpenModal(true);
                  }} 
                   className={styles.cardEmail}>
                            <FiMail className={styles.cardEmailIcon}/> 
                            Email this Rental to me</button>  </div>
                    <div className={styles.cardAddress}>
                {data.address}
                </div>
                <div className={styles.cardRent}>
                ${data.rent} per week
                </div>
                <div className={styles.cardBottomContainer}>
                <div className={styles.cardBedBath}>
                <img height="25" src={bedImg} alt="beds" className={styles.bedIcon} />  
                {data.beds}
                <img   height="25" src={bathImg} alt="baths" className={styles.bathIcon} />   
                {data.baths}
                    </div>
                    <div className={styles.cardBtn}>
                        <a href='/Application-Personal-Details'>
                    <button type="button" className={styles.btnApply}>Apply</button></a>
                    <button type="button" className={styles.btnRed}>View More</button>

                        </div>
                    </div>
                </div>
                )
              })}
            </div>

          </div></>
  )
}
