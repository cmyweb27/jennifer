import React, { useContext } from "react";
import { context } from "../context";
import styles from "./basket.module.css";
import style from "../menuPage/menupage.module.css";
import SignUp from "../forms/signup/SignUp";

const Basket = () => {
  const { basket, setBasket } = useContext(context);
  const add = (e) => {
    console.log(e, "in add");
    let bask = [...basket];
    let nbask = bask.map((x) => {
      if (x.id === e) {
        let price = x.productPrice / x.quantity;
        x.quantity += 1;
        x.productPrice += price;
      }
      return x;
    });
    setBasket(nbask);
  };
  const minus = (e) => {
    let bask = [...basket];
    let nbask = bask.map((x) => {
      if (x.id === e && x.quantity > 1) {
        let price = x.productPrice / x.quantity;
        x.quantity -= 1;
        x.productPrice -= price;
      }
      return x;
    });
    setBasket(nbask);
  };
  const handleDelet = (e) => {
    let bask = [...basket];

    bask.map((x, y) => {
      if (x.id === e) {
        bask.splice(y, 1);
      }
    });
    setBasket(bask);
  };
  let total =
    basket.length > 0
      ? basket.reduce((x, y) => {
          return x + y.productPrice;
        }, 0)
      : 8;
  return (
    <div>
      <h1 className={styles.navbartitle}>SV-LUNCHBOX</h1>
      <p className={styles.navbartitleP}>&Cocktails</p>
      <h1 className={styles.menuPageTitle}>Cart</h1>
      {/*{basket.length > 0 && (
        <h3 className={styles.basketItem}>
          you have ordered {basket.length} items{" "}
        </h3>
     )}*/}
      {basket.map((x) => (
        <div key={x.id} className={styles.basketWrapper}>
          {" "}
          <div className={styles.basketItem}>
            <div
              className={styles.basketItemRight}
              onClick={() => handleDelet(x.id)}
            >
              <i className="trash alternate outline icon large"></i>
            </div>
          </div>
          <div className={styles.basketItem}>
            <p className={styles.basketItemLeft}>Item:</p>
            <p className={styles.basketItemRight}>{x.productName}</p>
          </div>
          <div className={styles.basketItem}>
            <p className={styles.basketItemLeft}>Price:</p>
            <p className={styles.basketItemRight}>
              {" "}
              <span>&#8358;</span>
              {x.productPrice}
            </p>
          </div>
          <div className={styles.basketItem}>
            <p className={styles.basketItemLeft}>Quantity:</p>
            <div className={styles.basketItemRight}>
              <div className={`ui icon black compact basic buttons `}>
                {" "}
                <button className="ui button" onClick={() => minus(x.id)}>
                  <i className="minus icon"></i>
                </button>
                <button className="ui button">{x.quantity}</button>
                <button className="ui button" onClick={() => add(x.id)}>
                  <i className="add icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}{" "}
      <div>
        {basket.length > 0 ? (
          <div>
            {" "}
            <div className={styles.basketItem}>
              <p className={styles.basketItemLeft}>Subtotal:</p>{" "}
              <p className={styles.basketItemRight}>
                <span>&#8358;</span>
                {total}
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.basketItem}>
            <p>no item in cart</p>
          </div>
        )}
      </div>
      <SignUp />{" "}
      <div className={style.catering}>
        <h3 className={style.h3}>Event Catering</h3>{" "}
        <p className={style.eventCateringP}>
          We also cater to outdoor and indoor events and social gatherings. For
          enquiries:
        </p>
        <p> Please call 08035465977</p>
      </div>
      <div className={style.location}>
        <h3 className={style.h3}>Locations</h3>
        <p className={style.locationP}>
          ASHLEY'S PLACE MALL ORCHID HOTEL ROAD, ELEGANZA BUSTOP, LEKKI EXPRESS
          WAY.
        </p>
        <p> 09092227810 | 08090415778</p>
        <p className={style.locationP}>
          JAZZ 38, T.F KUBOYE ROAD, BEHIND PINNACLE FILLING STATION LEKKI PHASE
          1.
        </p>
        <p>08091110673 | 08091110672</p>
      </div>
      <div className={style.menuFooterIcons}>
        <div>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
      <div className={style.trademark}>
        <p className={style.trademarkP}>Sv-LunchBox| All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Basket;
