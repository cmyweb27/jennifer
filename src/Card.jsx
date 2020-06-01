import React, { useState } from "react";

const Card = ({ image, price, name, but2, order, content }) => {
  const [cartClick, setCartClick] = useState(false);
  const handle = () => {
    setCartClick(true);
  };
  console.log(content, "content");
  return (
    <div className="contain">
      <img src={image} alt="rad" />

      {cartClick ? (
        <div>
          <p className="raspberry">{name}</p>
          {content.map((x) => (
            <p key={x}>{x}</p>
          ))}
          <div className="raspberry">
            <span>
              <span>&#8358;</span>
              {price}
            </span>
          </div>
          <div>{but2}</div>
        </div>
      ) : (
        <div>
          <p className="raspberry">{name}</p>

          <p className="raspberry">
            <span>&#8358;</span>
            {price}
          </p>

          <div className="but" onClick={handle}>
            <button
              className="ui brown fluid right labeled icon button"
              onClick={order}
            >
              Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
