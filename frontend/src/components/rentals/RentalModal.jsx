import React from "react";
import styles from "../styles/rentals/RentalModal.module.css";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import ModalMsg from "./ModalMsg";

export default function RentalModal({ closeModal }) {

  const [displayImage, setDisplayImage] = useState("");
  const [submitMsg, setSubmitMsg] = useState(false);

  useEffect(() => {
    fetch("http://localhost:7070/rental/rental")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayImage(resultsData);
      });
  }, []);

  const handleSubmitMsg = () => {
    setSubmitMsg(true);
  };
  return (
<>  
<div className={styles.modalBG} onClick={() => {closeModal(false)}}>
      {/* function below is to stop modal from closing when clicking on the modal itself  */}
      <div
        className={styles.modalUI}
        onClick={(e) => e.stopPropagation()}
      >
      
        <div className={styles.closeBtn}>
          <FaTimes
            title="exit"
            className={styles.closeBtn}
            onClick={() => {
              closeModal(false);
            }}
          />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalFlex}>
            <div className={styles.modalTitle}>
              <img src={displayImage && displayImage[0].url} className={styles.modalImg} alt='modalimg'/>
            </div>
            <div className={submitMsg ? styles.hidden : styles.modalInputContainer}>
                <h3 className={styles.emailTitle}>Email to yourself</h3>
              <input
                className={styles.modalInput}
                type="text"
                required="required"
                autocomplete="off"
                placeholder="Email"
              ></input>
            </div>

            <div className={styles.loginFlex}>
              <button  className={submitMsg ? styles.hidden : styles.loginBtn} onClick={handleSubmitMsg}>Send Email</button>
            </div>
            <div>{submitMsg && (<ModalMsg/>)}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}