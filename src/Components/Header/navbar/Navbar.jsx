import { Link } from "react-router-dom";
import React from "react";
import { NavbarContainerStyled } from "../../../StyledComponents/Containers/NavbarContainerStyled";

export const Navbar = ({user}) => {
  const userS = user
  return (
    <NavbarContainerStyled>
      <Link to="/">Home</Link>
      <Link to={userS ? "/account" : "/login"}>
        {userS ? "Mi cuenta" : "Iniciar sesion"}
      </Link>
    </NavbarContainerStyled>
  );
};
