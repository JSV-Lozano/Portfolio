import React from "react";
import About from "../assets/img/juicy.png";
import PDF from "../assets/Documents/C-Jhoan.pdf";
import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div id="Home" className="Container-About">
      <div className="Container-Info">
        <div className="Animation-img">
          <img
            src={About}
            alt="About"
            className="About-me"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="Container-Text"
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <h2>Jhoan Stiven</h2>
          <h3>Desarrollador Web</h3>
          <button className="CV">
            <a href={PDF} target="_blank">CV</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
