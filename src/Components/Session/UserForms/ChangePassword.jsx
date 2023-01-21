import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { SessionButton } from "../../../StyledComponents/Buttons/SessionButton";
import { FlexColumnContainer } from "../../../StyledComponents/Containers/FlexColumnContainer";
import { server } from "../../../Utils/vars";
import { isEmpty } from "../../../validations/emptyValue";
import { FormStyled } from "./FormStyled";
import { InputStyled } from "./InputStyled";
import "../style.css";

export const ChangePassword = () => {
  const token = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passVerify, setPassVerify] = useState("");
  const setPasswordContent = (e) => {
    setPassword(e.target.value);
  };
  const setPassVerifyContent = (e) => {
    setPassVerify(e.target.value);
  };
  const updateEmail = async (e) => {
    e.preventDefault();
    if (!isEmpty(password) && !isEmpty(passVerify)) {
      await axios
        .put(
          `${server}/auth/new-password/`,
          {
            passwordR: `${password}`,
            passwordVerification: `${passVerify}`,
          },
          {
            headers: {
              "x-access-token": `${token.tkn}`,
            },
          }
        )
        .then(
          (res) =>
            swal({
              title: `${res.data.message}`,
              icon: "success",
            }),
          setTimeout(() => {
            navigate("/");
          }, 2000)
        )
        .catch((error) =>
          swal({
            title: `${error.response.data.message}`,
            icon: "error",
          })
        );
    }
  };
  return (
    <div className="changePassContainer">
      <div>
        <FlexColumnContainer>
          <h2 className="changePassTitle">Cambiar contraseña</h2>
          <FormStyled onSubmit={updateEmail}>
            <label>Ingresa nueva contraseña</label>
            <InputStyled
              type="password"
              onChange={(e) => {
                setPasswordContent(e);
              }}
              value={password}
              required="required"
            />
            <label>Repite la nueva contraseña</label>
            <InputStyled
              type="password"
              onChange={(e) => {
                setPassVerifyContent(e);
              }}
              value={passVerify}
              required="required"
            />
            <SessionButton type={"submit"} value={"Enviar email"} />
          </FormStyled>
        </FlexColumnContainer>
      </div>
    </div>
  );
};
