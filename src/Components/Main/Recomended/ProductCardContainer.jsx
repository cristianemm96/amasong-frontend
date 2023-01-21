import React from "react";
import { useDispatch } from "react-redux";
import { AddButtonStyled } from "../../../StyledComponents/Buttons/AddButtonStyled";
import { ProductCardStyled } from "../../../StyledComponents/Cards/ProductCardStyled";
import {productForAdd} from "../../../Redux/Cart/CartActions/cartActions"

export const ProductCardContainer = ({ id, name, img, desc, price }) => {
  
  const dispatch = useDispatch(); 
  return (
    <ProductCardStyled
      key={Math.random()}
    >
      <div>{name}</div>
      <div>
        <img
          alt={desc}
          src={img}
          style={{ width: "180px", maxHeight: "170px", minHeight:"170px" }}
        />
      </div>
      <div>{desc}</div>
      <div>${price}</div>
      <AddButtonStyled onClick={()=>dispatch(productForAdd({id,name,img,price}))}>Agregar</AddButtonStyled>
    </ProductCardStyled>
  );
};
