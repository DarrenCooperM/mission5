import React from "react";
import styles from "../styles/contact/ContactContent.module.css";
import { useState, useEffect } from "react";

export default function ContactContent() {
  const [imageURL, setImageURL] = useState("");
  // getting the image from db
  useEffect(() => {
    fetch("http://localhost:7070/contentsImg/content-images")
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        setImageURL(imageData);
      });
  }, []);
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentFeatures}>
        <div className={styles.leftContent}>
          <h3 className={styles.leftContentTitle}>Send us a message</h3>
          <p className={styles.leftContentText}>
            Thank you for getting in touch!
            <br />
            Kindly fill the form, have a great day!
          </p>
          <a href="/">
            <button className={styles.leftContentBtn}>Back</button>
          </a>
        </div>
        <div className={styles.rightContentContainer}>
          <div className={styles.rightContentInputBoxContainer}>
            <input
              className={styles.rightContentInputBox}
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Your Name"
            />
            <input
              className={styles.rightContentInputBox}
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Your Email"
            />
            <input
              className={styles.rightContentInputBox}
              type="text"
              name="number"
              autoComplete="off"
              placeholder="Phone Number"
            />
          </div>
          <div className={styles.rightContentMsgContainer}>
            <h4 className={styles.rightContentMsgHeader}>Message</h4>
            <input
              className={styles.rightContentMsgBox}
              type="text"
              name="message"
              autoComplete="off"
            />
            <div className={styles.sendBtnContainer}>
              <button className={styles.sendBtn}>Send</button>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.contentImage}
        src={imageURL && imageURL[3].url}
        alt="aptImg"
      />
    </div>
  );
}
