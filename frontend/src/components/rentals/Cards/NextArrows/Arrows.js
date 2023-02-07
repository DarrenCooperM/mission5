import React from "react";
import styles from "../../../styles/rentals/Arrows.module.css";

import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

export default function Arrows() {
  return (
    <div className={styles.arrowContainer}>
      <span>
        <RiArrowLeftSLine />
      </span>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <span>
        <RiArrowRightSLine />
      </span>
    </div>
  );
}
