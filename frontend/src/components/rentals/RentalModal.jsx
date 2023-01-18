import React from "react";
import styles from "../styles/rentals/RentalModal.module.css";
import { FaTimes } from "react-icons/fa";
import modalImg from "../images/modalimg.PNG"

export default function RentalModal({ closeModal }) {
  return (
    <div className={styles.modalBackground} onClick={() => closeModal(false)}>
      {/* function below is to stop modal from closing when clicking on the modal itself  */}
      <div
        className={styles.modalContainer}
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
              <img src={modalImg} className={styles.modalImg} alt='modalimg'/>
            </div>
            <div>
                <h3 className={styles.emailTitle}>Email to yourself</h3>
              <input
                className={styles.modalInput}
                type="password"
                required="required"
                autocomplete="off"
                name="password"
                placeholder="Email"
              ></input>
            </div>

            <div className={styles.loginFlex}>
              <button className={styles.loginBtn}>Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}