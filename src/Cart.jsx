import React from "react";

const Cart = ({ name, quantity, price, dele, add, minus }) => {
  return (
    <div className="cart contain ">
      <div className="order-cart">
        <div className="top-line">
          <h2 className="">{name}</h2>
          <div className="cartrash"> {dele}</div>
        </div>
        <p>just say</p>
        <p>just try</p>
        <p>thas it</p>
        <div className="bottom-line">
          <div className="ui icon brown compact basic buttons">
            {minus}
            <button className="ui button">{quantity}</button>
            {add}
          </div>{" "}
          <div className="cartprice">
            <span>&#8358;</span>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
