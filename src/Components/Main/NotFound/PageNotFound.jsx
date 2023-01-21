import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

export const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <h2>Pagina no encontrada</h2>
      <img
        src="https://i.ibb.co/Qk3LFXh/pixeltrue-error-1.png"
        className="imgError"
      />
      <button onClick={()=>navigate('/')} className="backButton">
        Ir al inicio
      </button>
    </div>
  );
};

