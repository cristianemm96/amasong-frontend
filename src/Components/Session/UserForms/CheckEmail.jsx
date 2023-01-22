import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionButton } from "../../../StyledComponents/Buttons/SessionButton";
import { FlexColumnContainer } from "../../../StyledComponents/Containers/FlexColumnContainer";
import { server } from "../../../Utils/vars";
import { FormStyled } from "./FormStyled";
import { InputStyled } from "./InputStyled";
import swal from "sweetalert";
import { isEmpty } from "../../../validations/emptyValue";
import "../style.css";
import { isEmail } from "../../../validations/email";

export const CheckEmail = () => {
  const [dStatus, setdStatus] = useState(false)
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const setEmailContent = (e) => {
    setEmail(e.target.value);
  };
  const checkCurrentEmail = async (e) => {
    e.preventDefault();
    setdStatus(true)
    if(!isEmpty(email) && isEmail(email)){
      try {
        await axios
          .post(`${server}/auth/check-email`, {
            emailReq: email,
          })
          .then((res) => {
              window.confirm(res.data)
              navigate("/");
            }
            
          );
      } catch (error) {
          swal({
              title:`${error.response.data.message}`,
              icon:"error"
          })
          window.location.reload()
      }
    }
  };
  return (
    <div
      className="checkEmailContainer"
    >
      <div>
        <FlexColumnContainer>
          <h2 className="changePassTitle">Ingresa tu email</h2>
          <FormStyled onSubmit={checkCurrentEmail}>
            <InputStyled
              type="email"
              onChange={(e) => {
                setEmailContent(e);
              }}
              value={email}
              required="required"
            />

            {dStatus ?<div id="loading"/>:<div></div>}
            <SessionButton type={"submit"} value={"Enviar email"}/>
          </FormStyled>
        </FlexColumnContainer>
      </div>
    </div>
  );
};
