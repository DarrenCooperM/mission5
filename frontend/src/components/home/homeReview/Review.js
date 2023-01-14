import React, { useState } from "react";
import ReviewDetails from "./ReviewDetails";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import styles from "../../styles/home/HomeSlider.module.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = ReviewDetails[index];

  const checkNumber = (number) => {
    if (number > ReviewDetails.length - 1) {
      return 0;
    } else if (number < 0) {
      return ReviewDetails.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

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
