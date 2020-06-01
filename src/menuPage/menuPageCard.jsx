import React, { useContext, useState } from "react";
import style from "./menupage.module.css";
import { context } from "../context";
import { Link } from "react-router-dom";
const MenuCard = ({ price, name, content, id }) => {
  const [click, setClick] = useState(false);
  const { data, itemBasket } = useContext(context);
  const order = (e) => {
    setClick(true);
    data.map((x) => (x.id === e ? itemBasket(x) : null));
  };

  return (
    <div className={style.menuCard}>
      <div className={style.menuHeader}>
        {" "}
        <h2 className={`${style.h3} ${style.name}`}> {name} </h2>
        <h3 className={style.h3}>
          {" "}
          <span>&#8358;</span>
          {price}{" "}
        </h3>
      </div>
      <div className={style.contentDiv}>
        {" "}
        {content.map((x) => (
          <p key={x} className={style.contentP}>
            {x}
          </p>
        ))}
      </div>
      <div className={style.contentButton}>
        {click ? (
          <Link to="/basket">
            <button className="ui brown fluid button">View cart</button>
          </Link>
        ) : (
          <button onClick={() => order(id)} className="ui brown fluid button">
            order
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
