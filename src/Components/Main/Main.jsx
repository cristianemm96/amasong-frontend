import React from "react";
import { Products } from "./Products/Products";
import { Categories } from "./Categories/Categories";
import { Recomended } from "./Recomended/Recomended";


export const Main = () => {
  return (
    <div /*style={{ margin: "10px auto", padding:"15px"}}*/>
      <Recomended />
      <Categories />
      <Products />
    </div>
  );
};
