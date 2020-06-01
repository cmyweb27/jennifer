import React from "react";
import styles from "./menuPage/menupage.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.catering}>
        <h3 className={styles.h3}>Event Catering</h3>{" "}
        <p className={styles.eventCateringP}>
          We also cater to outdoor and indoor events and social gatherings. For
          enquiries:
        </p>
        <p> Please call 08035465977</p>
      </div>
      <div className={styles.location}>
        <h3 className={styles.h3}>Locations</h3>
        <p className={styles.locationP}>
          ASHLEY'S PLACE MALL ORCHID HOTEL ROAD, ELEGANZA BUSTOP, LEKKI EXPRESS
          WAY.
        </p>
        <p> 09092227810 | 08090415778</p>
        <p className={styles.locationP}>
          JAZZ 38, T.F KUBOYE ROAD, BEHIND PINNACLE FILLING STATION LEKKI PHASE
          1.
        </p>
        <p>08091110673 | 08091110672</p>
      </div>
      <div className={styles.menuFooterIcons}>
        <div>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
      <div className={styles.trademark}>
        <p className={styles.trademarkP}>Sv-LunchBox| All Rights Reserved</p>
        <p>Produced by Carlo</p>
      </div>
    </div>
  );
};

export default Footer;
