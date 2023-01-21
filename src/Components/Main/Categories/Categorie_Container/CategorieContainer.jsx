import React from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../../../Redux/Categories/CategorieAction/categoriesAction";
import { CategorieButtonStyled } from "../../../../StyledComponents/Buttons/CategorieButtonStyled";

export const CategorieContainer = ({ name }) => {
  const dispacth = useDispatch();
  return (
    <CategorieButtonStyled onClick={() => dispacth(selectCategory(name))}>
      {name}
    </CategorieButtonStyled>
  );
};
