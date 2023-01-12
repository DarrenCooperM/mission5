import React from "react";
import styles from "../styles/Contact.module.css";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import axios from "axios";
import { useState } from "react";

export default function HomeContact() {
  const [userInput, setUserInput] = useState({});
  const subscribeResultDiv = document.getElementById("subscribeResult");
  // -------------------- USER DATA INPUT --------------------
  function handleUserInput(e) {
    // console.log(e.target.value);
    setUserInput(() => {
      return { [e.target.name]: e.target.value };
    });
  }
  // submit data to backend
  const handleSubscribe = (e) => {
    // e.preventDefault();
    console.log(userInput);

    axios
      .post("http://localhost:7070/subscription/subscribe", userInput)
      .then((data) => {
        // alert("Login Successful");
        console.log("Success:", data);
        setTimeout(() => {
          subscribeResultDiv.innerHTML =
            '<span style="color: green">Thanks for subscribing to our weekly emails list!</span>';
        }, 1000);
      })
      .catch((error) => {
        // alert("Please check Username or Password");
        console.error("Error:", error);
        subscribeResultDiv.innerHTML =
          '<span style="color: red">This email is either already in use or is invalid</span>';
      });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Get in Touch</h1>
      <div className={styles.contacts}>
        <div className={styles.emailContainer}>
          <h3 className={styles.email}>Email us</h3>

          <h3 className={styles.emailAddress}>
            {" "}
            <span className={styles.icons}>
              {" "}
              <AiOutlineMail />
            </span>
            info@metronz.co.nz
          </h3>
        </div>
        <div className={styles.callContainer}>
          <h3 className={styles.call}>Call us</h3>

          <h3 className={styles.phNumber}>
            {" "}
            <span className={styles.icons}>
              {" "}
              <FaPhone />
            </span>
            09 391 4642
          </h3>
        </div>
      </div>
      <div className={styles.subscribe}>
        <p className={styles.subscribeText}>Subscribe to our newsletter</p>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          autoComplete="off"
          className={styles.subscribeInput}
          onChange={handleUserInput}
        ></input>
        <button className={styles.subscribeBtn} onClick={handleSubscribe}>
          Subscribe
        </button>
        <div id="subscribeResult" className={styles.subscribeResult}></div>
      </div>
    </div>
  );
}
