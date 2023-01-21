import React from "react";
import "../style.css"

export const FullCartProduct = ({ name, imgR, price, quantity }) => {
  return (
    <div
      className="fullCartProductContainer"
    >
      <p>{name}</p>
      <img
        src={imgR}
        className="fullCartProductImg"
      />
      <p>{quantity}x</p>
      <p>${price}</p>
    </div>
  );
};
