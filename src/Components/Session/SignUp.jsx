import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { SessionForm } from "./UserForms/SessionForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../Utils/vars";
import "./style.css";
import { isEmpty } from "../../validations/emptyValue";
import { isEmail } from "../../validations/email";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updateEmail = (value) => setEmail(`${value}`);
  const updatePassword = (value) => setPassword(`${value}`);
  const navigate = useNavigate();
  const signUpUser = async (e) => {
    e.preventDefault();
    if (!isEmpty(email) && !isEmpty(password) && isEmail(email)) {
      await axios
        .post(`${server}/auth/signup`, { email: email, password: password })
        .then(() =>
          swal({
            title: "Usuario registrado!",
            icon: "success",
          }).then(
            setTimeout(() => {
              navigate("/login");
            }, 2000)
          )
        )
        .catch(() =>
          swal({
            title: "Email ya registrado",
            icon: "error",
          })
        );
    }
  };
  return (
    <div style={{ paddingTop: "80px", paddingBottom: "30px" }}>
      <div className="signUpContainer">
        <div></div>
        <h2>Registrarse</h2>
        <SessionForm
          email={email}
          password={password}
          updateEmail={updateEmail}
          updatePass={updatePassword}
          subFunc={signUpUser}
          valueButton={"Registrar"}
        />
      </div>
    </div>
  );
};
