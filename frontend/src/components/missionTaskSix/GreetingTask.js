import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/missionTask/Greeting.module.css";

export default function TaskSix() {
  // state for targetting input user data and sending to backend
  const [userInput, setUserInput] = useState("");

  // innerHTML for input data being sent to backend
  const confirmationDiv = document.getElementById("confirmationText");

  // innerHTML for input data to display on frontend
  const greetingResultDiv = document.getElementById("greetingResult");

  // collecting user input data
  function handleUserInput(e) {
    // console.log(e.target.value);
    setUserInput(() => {
      return { [e.target.name]: e.target.value };
    });
  }
  // submit user input data to backend
  const handleInput = (e) => {
    // e.preventDefault();
    console.log(userInput);

    axios
      .post("http://localhost:7070/greeting/Greeting", userInput)
      .then((data) => {
        console.log("Success:", data);
        confirmationDiv.innerHTML = "data successfully sent";
      })
      .catch((error) => {
        console.error("Error:", error);
        confirmationDiv.innerHTML = "data unsuccessful";
      });
  };
  // retrieve greeting from data using fetch get request
  const getGreeting = () => {
    // console.log(5);
    fetch("http://localhost:7070/greeting/Greeting")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        greetingResultDiv.innerHTML = resultsData[0].message;
      });
  };
  return (
    <div className={styles.greetingContainer}>
      <h1>Send a message:</h1>
      <input
        className={styles.greetingInput}
        type="text"
        name="message"
        onChange={handleUserInput}
      ></input>
      {/* displaying confirmation text on data sent to backend  */}
      <div id="confirmationText"></div>
      {/* submitting input data to backend  */}
      <button className={styles.greetingBtn} onClick={handleInput}>
        Send the message
      </button>
      <br></br>
      {/* button used for retreiving user input data from database  */}
      <button className={styles.greetingBtn} onClick={getGreeting}>
        Get Message
      </button>
      {/* display retreived greeting data  */}
      <div id="greetingResult" className={styles.greetingResult}></div>
    </div>
  );
}
