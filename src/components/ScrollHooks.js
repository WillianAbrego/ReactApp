import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moveindo el scroll ");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    console.log("fase de Montaje");
  }, []);

  useEffect(() => {
    console.log("fase de Acualizacion");
  });

  useEffect(() => {
    return () => {
      console.log("fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida </h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
