import React, { useState, useEffect } from "react";

import axios from "axios";

const context = React.createContext();

const Context = ({ children }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get(" https://a01941cn7f.execute-api.eu-central-1.amazonaws.com/dev")
      .then((res) => {
        setData(res.data);
        setItem(res.data);
      });
  }, []);

  return (
    <div>
      <context.Provider
        value={{
          itemBasket: (item) => {
            setBasket([...basket, item]);
          },
          setBasket: (item) => {
            setBasket(item);
          },
          basket,
          data,
          cartF: (cee) => {
            setCart([...cart, cee]);
          },
          cartD: (cee) => {
            setCart(cee);
          },

          cart,
          item,
          addItem: (cee) => {
            setData(cee);
          },
          isMenuOpen: menuOpenState,
          toggleMenu: () => setMenuOpenState(!menuOpenState),
          stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};

export { context, Context };
