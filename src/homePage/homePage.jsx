import React from "react";
import styles from "./homePage.module.css";
import Slide from "../Slide";
import { Link } from "react-router-dom";
import logo from "../images/IMG_9427.JPG";
import log2 from "../images/fullplatter.jpg";
import log3 from "../images/pancake.JPG";
import log4 from "../images/crap.JPG";
import log5 from "../images/gtb pic.JPG";
import log6 from "../images/_DSC0056.jpg";

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.navbartitle}>SV-LUNCHBOX</h1>
      <p className={styles.navbartitleP}>&Cocktails</p>
      <div className={styles.menuCarousel}>
        <Slide />
      </div>

      <div>
        <p className={styles.intro}>
          Enjoy the ultimate barbecue experience in Nigeria. Our range of mouth
          watering and nourishing barbecue and food offerings are specially
          curated to delight your taste buds. Black boxes loaded with the best
          Barbecue combos to give you the happiness and excitement good food
          brings. Established in 2010, Sv-LunchBox has become the favourite of
          grilled food lovers. Visit our outlets located at Lekki, Ikeja and
          Gbagada for pick Up or Order Online, we provide delivery to several
          parts of Lagos. We also cater to all kind of events on request.{" "}
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.gridImage}>
          <img src={logo} alt="swipe" />
        </div>
        <div className={styles.gridImage}>
          <img src={log2} alt="swipe" />
        </div>
        <div className={styles.gridImage}>
          <img src={log3} alt="swipe" />
        </div>
        <div className={styles.gridImage}>
          <img src={log4} alt="swipe" />
        </div>
      </div>
      <div className={styles.viewMenuButton}>
        <Link to="/menu">
          <button className="ui fluid brown button">View Menu</button>
        </Link>
      </div>

      <div>
        <div className={styles.catering}>
          <h3 className={styles.h3}>Event Catering</h3>{" "}
          <p className={styles.eventCateringP}>
            We also cater to outdoor and indoor events and social gatherings.
            For enquiries:
          </p>
          <p> Please call 08035465977</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridImage}>
            <img src={log5} alt="swipe" />
          </div>
          <div className={styles.gridImage}>
            <img src={log6} alt="swipe" />
          </div>
        </div>
        <div className={styles.location}>
          <h3 className={styles.h3}>Locations</h3>
          <p className={styles.locationP}>
            ASHLEY'S PLACE MALL ORCHID HOTEL ROAD, ELEGANZA BUSTOP, LEKKI
            EXPRESS WAY.
          </p>
          <p> 09092227810 | 08090415778</p>
          <p className={styles.locationP}>
            JAZZ 38, T.F KUBOYE ROAD, BEHIND PINNACLE FILLING STATION LEKKI
            PHASE 1.
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
