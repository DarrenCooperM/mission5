import React from 'react'
import { useState, useEffect } from "react";
import styles from '../styles/rentals/NewRentals.module.css'
import bedImg from "../icons/bed.png";
import bathImg from "../icons/bath.png";
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import {MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight'
import { MdKeyboardArrowLeft } from '@react-icons/all-files/md/MdKeyboardArrowLeft'

export default function NewRental({setOpenModal, displayCards}) {

    // --------------- IMAGE SLIDER (INCOMPLETE) -----------------------
        // text content state
    // const [displayContent, setDisplayContent] = useState("");

    // image slider
    // const [currentIndex, setCurrentIndex] = useState(0);

      // getting content from db
  // useEffect(() => {
  //   fetch("http://localhost:7070/rental/rental")
  //     .then((res) => res.json())
  //     .then((resultsData) => {
  //       // console.log(resultsData);
  //       setDisplayContent(resultsData);
  //     });
  // }, []);
  

//   const goToPrevious = () => {
//     console.log(displayContent)
// const isFirstSlide = currentIndex === 0
// const newIndex = isFirstSlide ? displayContent.length -1 : currentIndex - 1;
// setCurrentIndex(newIndex)
//  console.log(newIndex) };

   
//  const goToNext = () => {
//   console.log(displayContent)
// const isLastSlide = currentIndex === displayContent.length - 1;
// const newIndex = isLastSlide ? 0 : currentIndex + 1
// setCurrentIndex(newIndex)
// console.log(newIndex) };

  return (<>
    <div className={styles.rentalContaier}>
      <div className={styles.cardContainer}>
        {/* CARDS  */}
        {displayCards && displayCards.map(function (data) {
          return (
            <div key={data.id} className={styles.card}>       
              <img src={data.url} className={styles.cardImg}/>
              <div className={styles.cardSliderContainer}>
                <div className={styles.cardSliderArrows}>
                  <MdKeyboardArrowLeft className={styles.left}/>
                  <MdKeyboardArrowRight className={styles.right}/>
                </div>
              </div>
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
                      Email this Rental to me</button>  
                </div>
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
      </div>
    </>
  )
}
