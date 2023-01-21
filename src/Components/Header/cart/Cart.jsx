import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import OpenCart from "./OpenCart/OpenCart";
import './style.css'
export const Cart = () => {
  const carrito = useSelector((state) => state.cart.productsInCart);
  let initialFlag = false;
  const [flag, setFlag] = useState(initialFlag);
  return (
    <div onClick={() => setFlag(!flag)} style={{width:"60px"/*, display:"flex", alignItems:"center"*/}}>
      <div className="cartIconContainer">
        <img
          src="https://i.ibb.co/T1dG4H1/icons8-shopping-cart-30.png"
          className="cartIcon"
        />
      </div>
      {flag && <OpenCart />}
      <span style={{position:"absolute", top:"22px", right:"50px"}}>{carrito.length}</span>
    </div>
  );
};
