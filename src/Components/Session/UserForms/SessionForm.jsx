import React from "react";
import { FormStyled } from "./FormStyled";
import { InputStyled } from "./InputStyled";
import { FlexColumnContainer } from "../../../StyledComponents/Containers/FlexColumnContainer";
import { SessionButton } from "../../../StyledComponents/Buttons/SessionButton";

export const SessionForm = ({
  email,
  password,
  updateEmail,
  updatePass,
  subFunc,
  valueButton,
}) => {
  return (
    <FlexColumnContainer>
      <FormStyled onSubmit={subFunc}>
        <label>Email</label>
        <InputStyled
          type="email"
          required="required"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
        />
        <label>Contraseña</label>
        <InputStyled
          type="password"
          required="required"
          value={password}
          onChange={(e) => updatePass(e.target.value)}
        />
        <SessionButton
          type="submit"
          value={valueButton}
        />
      </FormStyled>
    </FlexColumnContainer>
  );
};
