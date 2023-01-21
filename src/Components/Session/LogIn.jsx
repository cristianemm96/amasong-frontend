import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { SessionForm } from "./UserForms/SessionForm";
import { setOnUser } from "../../Redux/User/UserActions/userAction";
import { useDispatch } from "react-redux";
import "./style.css";
import axios from "axios";
import { server } from "../../Utils/vars";
import { isEmpty } from "../../validations/emptyValue";
import { isEmail } from "../../validations/email";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginUser = async (e) => {
    e.preventDefault();
    if (!isEmpty(email) && !isEmpty(password) && isEmail(email)) {
      try {
        await axios
          .post(`${server}/auth/signin`, { email: email, password: password })
          .then((res) => {
            dispatch(setOnUser(res.data));
          });
      } catch (error) {
        swal({
          title: "Email o contraseña incorrecto",
          icon: "error",
        });
      }
    }
  };
  return (
    <div style={{ paddingTop: "50px" }}>
      <div className="sessionContainer">
        <h2>Iniciar sesion</h2>
        <SessionForm
          email={email}
          password={password}
          updateEmail={setEmail}
          updatePass={setPassword}
          subFunc={LoginUser}
          valueButton={"Iniciar sesion"}
          className="buttonSession"
        />
        <button
          onClick={() => {
            navigate("/check-email");
          }}
          className="sessionButton"
        >
          Olvidaste tu contraseña?
        </button>
        <label>No tienes cuenta?</label>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="sessionButton"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};
