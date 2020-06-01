import React, { useContext } from "react";
import Card from "./Card";
import { context } from "./context";
import { Link } from "react-router-dom";

const Body = () => {
  const { data, item, addItem, cartF, cart } = useContext(context);
  const order = (e) => {
    item.map((x) => {
      if (x.id === e) {
        cartF(x);
      }
    });
  };

  const addQuantityF = (e) => {
    if (cart.length > 0) {
      cart.map((x, y) => {
        if (x.id === e) {
          cart.splice(y, 1);
        }
      });
    }

    const fell = item.map((x) => {
      if (x.id === e) {
        let price = x.productPrice / x.quantity;
        x.quantity += 1;
        x.productPrice += price;

        cartF(x);
      }

      return x;
    });
    addItem(fell);
  };
  const subtractQuantityF = (e) => {
    const fell = item.map((x) => {
      if (x.id === e && x.quantity > 1) {
        let price = x.productPrice / x.quantity;
        x.quantity -= 1;
        x.productPrice -= price;
      }
      return x;
    });
    addItem(fell);
  };
  return (
    <div className="wrapper">
      {data.map((x) => (
        <div key={x.id}>
          <Card
            image="images/pizza-1.jpg"
            price={x.productPrice}
            name={x.productName}
            content={x.content}
            but={
              <Link to="./Cart">
                <button className="ui  brown button">View Cart</button>
              </Link>
            }
            but2={
              <div className="but">
                <div className="ui icon brown compact basic fluid buttons">
                  <button
                    className="ui button"
                    onClick={() => subtractQuantityF(x.id)}
                  >
                    <i className="minus icon"></i>
                  </button>
                  <button className="ui button">{x.quantity}</button>
                  <button
                    className="ui button"
                    onClick={() => addQuantityF(x.id, x.productPrice)}
                  >
                    <i className="add icon"></i>
                  </button>
                </div>
                <button className="ui  fluid brown button">View Cart</button>
              </div>
            }
            order={() => order(x.id, x.productPrice)}
          />
        </div>
      ))}
    </div>
  );
};

export default Body;
