import React from "react";
import styles from "./homePage.module.css";
const HomeCard = () => {
  return (
    <div>
      <div className={styles.gridMenu}>
        <div className={styles.gridMenuCard}>
          <div className={styles.gridImage}>
            <img src="images/pancake.JPG" alt="swipe" />
          </div>
          <div className={styles.homeCardButton}>
            <button className="ui fluid brown button">Order </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
