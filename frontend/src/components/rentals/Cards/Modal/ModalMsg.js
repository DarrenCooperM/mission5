import React from "react";
import styles from "../../../styles/rentals/ModalMsg.module.css";

export default function ModalMsg() {
  return (
    <>
      <div className={styles.modalMsgContainer}>
        <h3>Thank you!</h3>
        <p>
          If you do not get an email within the next 15 minutes, please call
          0800 000 000 or email metro@metro.co.nz
        </p>
      </div>
    </>
  );
}
