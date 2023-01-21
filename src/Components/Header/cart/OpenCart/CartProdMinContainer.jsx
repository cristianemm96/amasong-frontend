import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteProductFromCart,
  productForAdd,
} from "../../../../Redux/Cart/CartActions/cartActions";
import '../style.css'

export const CartProdMinContainer = ({ id, name, img, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="cartProdMinContainer"
    >
      <div className="nameContainer">{name}</div>
      <div className="imgContainer">
        <img
          className="productImg"
          src={img}
        />
      </div>
      <div className="priceContainer">
        {quantity}x ${price}
      </div>
      <button
        onClick={() => {
          dispatch(deleteProductFromCart(id));
        }}
        className="productCartButton"
      >
        -
      </button>
      <button
        onClick={() => dispatch(productForAdd({ id, name, img, price }))}
        className="productCartButton"
      >
        +
      </button>
    </div>
  );
};
