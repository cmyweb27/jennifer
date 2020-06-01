import React, { useContext } from "react";
import MenuCard from "./menuPageCard";
import { context } from "../context";
import styles from "./menupage.module.css";

import Slide from "../Slide";
const MenuPage = () => {
  const { data } = useContext(context);

  return (
    <div className={styles.menu}>
      <h1 className={styles.navbartitle}>SV-LUNCHBOX</h1>
      <p className={styles.navbartitleP}>&Cocktails</p>
      <div className={styles.menuCarousel}>
        <Slide />
      </div>
      <div className={styles.location}>
        <p>
          {/*           SV LUNCHBOX & COCKTAILS, fondly called "the grill station" is built on
          the love a couple share, which extended to playing with flavours and
          herbs in their kitchen. Kunle and Jennifer have turned their love for
          cooking into a street food business. SV Lunchbox is dedicated to
          serving quality barbeque and a long-lasting culinary experience that
          pays attention to every detail in the process, giving you your money's
          worth. Our meals and grills are truly art in a box. We provide outdoor
          catering for Parties, Weddings, Formal events etc. Offering our
          services across every state in Nigeria. */}
          The Sv-Lunch menu consists of variety of grilled tasty food prepared
          to sate your desires. The menu include combinations of Chicken,
          Turkey, Jollof Rice, Burger, Potato wedges, Lamb chop, Pork Chops,
          Cheeseburger, Yam chips, Sausages, Hot dogs, Prawns, Lobsters, Guinea
          Fowl e.t.c. We reinvent our menu from time to time to ensure our
          customers get only the best barbecue.
        </p>
      </div>
      <div className={styles.wrap}>
        {data.map((x) => (
          <MenuCard
            price={x.productPrice}
            key={x.id}
            name={x.productName}
            content={x.content}
            id={x.id}
            data={data}
          />
        ))}
      </div>
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
      </div>
    </div>
  );
};

export default MenuPage;
