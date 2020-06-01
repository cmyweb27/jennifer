import React, { useContext } from "react";
import { context } from "./context";
import Cart from "./Cart";

const CartPage = () => {
  const { cart, cartD, cartF } = useContext(context);

  const handleDelet = (e) => {
    let car = [...cart];
    car.map((x, y) => {
      if (x.id === e) {
        car.splice(y, 1);
      }
    });
    cartD(car);
  };
  const addQuantityF = (e) => {
    let car = [...cart];

    const fell = car.map((x) => {
      if (x.id === e) {
        let price = x.productPrice / x.quantity;
        x.quantity += 1;
        x.productPrice += price;

        cartF(x);
      }

      return x;
    });
    cartD(fell);
  };
  const minus = (e) => {
    let car = [...cart];
    console.log(car, "car");
    const fell = car.map((x) => {
      if (x.id === e && x.quantity > 1) {
        let price = x.productPrice / x.quantity;
        x.quantity -= 1;
        x.productPrice -= price;

        cartF(x);
      }

      return x;
    });
    cartD(fell);
  };
  console.log(cart);
  let total =
    cart.length > 0
      ? cart.reduce((x, y) => {
          console.log(x, "x");
          console.log(y.productPrice, "y");
          return x + y.productPrice;
        }, 0)
      : 8;
  return (
    <div>
      {cart.map((x) => (
        <Cart
          name={x.productName}
          price={x.productPrice}
          quantity={x.quantity}
          key={x.id}
          dele={
            <i
              className="trash alternate outline icon large brown"
              onClick={() => handleDelet(x.id)}
            ></i>
          }
          add={
            <button className="ui button" onClick={() => addQuantityF(x.id)}>
              <i className="add icon"></i>
            </button>
          }
          minus={
            <button className="ui button" onClick={() => minus(x.id)}>
              <i className="minus icon"></i>
            </button>
          }
        />
      ))}
      {cart.length > 0 ? (
        <div className="cart contain ">
          <div className="order-cart">
            <h2 className="">Order Summary</h2>
            <div className="top-line">
              <h4 className="">Subtotal</h4>
              <div className="cartrash">
                <span>&#8358;</span>
                {total}
              </div>
            </div>
            <div className="top-line">
              <h4 className="">delivery fee:</h4>
              <div className="cartrash">
                <span>&#8358;</span>
                {500}
              </div>
            </div>{" "}
            <div className="top-line">
              <h2 className="">Total amount</h2>
              <div className="cartrash">
                <h3>
                  {" "}
                  <span>&#8358;</span>
                  {total + 500}
                </h3>
              </div>
            </div>
            <div className="checkout-button">
              {" "}
              <button className="ui black button">checkout</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartPage;
