import React from "react";
import styles from "../styles/contact/ContactContent.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";

export default function ContactContent() {
  const [userInput, setUserInput] = useState({});
  const [imageURL, setImageURL] = useState("");
  const submitResultDiv = document.getElementById("submitResult");
  // getting the image from db
  useEffect(() => {
    fetch("http://localhost:7070/home-content/home-content-images")
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        setImageURL(imageData);
      });
  }, []);

  // submit data to database
  function handleUserInput(e) {
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  // submit data to database
  // converts string to integer for phone number input
  // function handleUserInput(e) {
  //   const { name, value } = e.target;
  //   let parsedValue = value;
  //   if (name === "string") {
  //     parsedValue = parseInt(value);
  //   }
  //   setUserInput((prevState) => {
  //     return { ...prevState, [name]: parsedValue };
  //   });
  // }

  const handleSubmit = (e) => {
    console.log(userInput);

    axios
      .post("http://localhost:7070/enquiry/enquiry-message", userInput)
      .then((data) => {
        console.log("Success", data);
        submitResultDiv.innerHTML =
          "Thanks for your enquiry. We will get back to you shortly! <br/> Page will now reload";
        setTimeout(() => {
          // Reload the page
          window.location.href = window.location.href;
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <button className={styles.leftContentBtn}>
              <RiArrowLeftSLine className={styles.backIcon} />
              Back
            </button>
          </a>
        </div>
        <div className={styles.rightContentContainer}>
          <form className={styles.rightContentInputBoxContainer}>
            <input
              className={styles.rightContentInputBox}
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Your Name"
              required
              onChange={handleUserInput}
            />
            <input
              className={styles.rightContentInputBox}
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Your Email"
              required="required"
              onChange={handleUserInput}
            />
            <input
              className={styles.rightContentInputBox}
              type="number"
              name="number"
              autoComplete="off"
              required="required"
              placeholder="Phone Number"
              onChange={handleUserInput}
            />
          </form>
          <div className={styles.rightContentMsgContainer}>
            <h4 className={styles.rightContentMsgHeader}>Message</h4>
            <textarea
              className={styles.rightContentMsgBox}
              type="text"
              name="message"
              autoComplete="off"
              placeholder="Write your message here..."
              required="required"
              onChange={handleUserInput}
            />
            <div id="submitResult" className={styles.submitResult}></div>
            <div className={styles.sendBtnContainer}>
              <button
                type="submit"
                onClick={handleSubmit}
                className={styles.sendBtn}
              >
                Send
              </button>
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
