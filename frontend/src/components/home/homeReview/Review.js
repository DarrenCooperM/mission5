import React, { useState } from "react";
import ReviewDetails from "./ReviewDetails";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import styles from "../../styles/home/HomeSlider.module.css";

const Review = () => {
  // review id
  const [index, setIndex] = useState(0);
  // review details
  const { name, job, image, text } = ReviewDetails[index];

  const checkNumber = (number) => {
    // checks if the input number is greater than the length of the array (ReviewDetails) minus 1
    // If this condition is true, the function returns 0
    if (number > ReviewDetails.length - 1) {
      return 0;
      // If this condition is not true, the function then checks if the input number is less than 0. If this second condition is true,
      // the function returns the length of the "ReviewDetails" array minus 1.
      // If neither of these conditions are true, the function simply returns the input number.
    } else if (number < 0) {
      return ReviewDetails.length - 1;
    }
    return number;
  };

  // updates a state variable
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  // updates a state variable
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  // updates a state variable
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * ReviewDetails.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className={styles.review}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.personImg} />
        <span className={styles.quoteIcon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{name}</h4>
      <p className={styles.jon}>{job}</p>
      <p className={styles.info}>{text}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.prevBtn} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={styles.nextBtn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={styles.randomBtn} onClick={randomPerson}>
        Suprise Me!
      </button>
    </article>
  );
};

export default Review;
