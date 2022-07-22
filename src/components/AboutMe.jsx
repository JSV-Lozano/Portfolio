import React from "react";
import About from "../assets/img/About.svg";
import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div id="Home" className="Container-About">
      <div className="Container-Info">
        <h2>Jhoan STiven</h2>
        <h3>Desarrollador Web</h3>
        <p>
          Soy un desarrollador web con experiencia en desarrollo de aplicaciones
          web. Me gusta trabajar con tecnologías como React, NodeJS, MongoDB,
          etc. Me gusta trabajar con frameworks como Bootstrap, Materialize,
          etc. Me gusta trabajar con herramientas como Git, GitHub, etc. Me
          gusta trabajar con tecnologías como HTML, CSS, JavaScript, etc.
        </p>
        <img src={About} alt="About" className="About-me" />
      </div>
    </div>
  );
}

export { AboutMe };
