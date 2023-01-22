import React from "react";
import { useSelector } from "react-redux";
import { RecomendedContainerStyled } from "../../../StyledComponents/Containers/RecomendedContainerStyled";
import { ProductCardContainer } from "./ProductCardContainer";

export const Recomended = () => {
  const products = useSelector((state) => state.products.products);
  const getSelleds = products.reduce((acc, el) => acc.concat(el.selled), []);

  const maxSelleds = getSelleds
    .sort(function (a, b) {
      return b - a;
    })
    .slice(0, 6);

  //Aux array
  const allRecomended = [];
  const getId = (a) =>
    products.find((el) => {
      if (a === el.selled && !allRecomended.includes(el._id)) {
        allRecomended.push(el._id);
        return el;
      }
    });

  const ids = maxSelleds.reduce((acc, el) => acc.concat(getId(el)), []);
  return (
    <RecomendedContainerStyled>
      {ids.map((p) => (
        <ProductCardContainer
          id={p._id}
          key={Math.random()}
          name={p.name}
          img={p.imgUrl}
          desc={p.desc}
          price={p.price}
        />
      ))}
    </RecomendedContainerStyled>
  );
};
