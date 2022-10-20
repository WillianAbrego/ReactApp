import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyle from "./Estilos.module.css";

export default function Estilos() {
  let myStyle = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <section>
      <h2>Estilos Css en react</h2>
      <h3 className="bg-react">Estilo en hoja CSS</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilo en linea (atributo style)
      </h3>
      <h3 className="bg-react" style={myStyle}>
        Estilo en linea
      </h3>
      <h3 className="bg-react">
        Agregando Normaliza
        <br />
        <code>@import-normalize;</code>
      </h3>
      <h3 className={moduleStyle.success}>Estilos con modules</h3>
      <h3 className="bg-sass">Estilos con sass</h3>
    </section>
  );
}
