import React from "react";
import { SiGmail } from "react-icons/si";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer id="Contact">
      <div className="Footer-Container">
        <h2>Contact</h2>
        <div className="Footer-Info">
          <a href="mailto:kjsvlozano17104@gmail.com" target="_blank">
            <SiGmail  className="Gmail-Icon" />
          </a>
          <a href="https://www.facebook.com/JhoanStivenV.L/" target="_blank">
            <i className="devicon-facebook-plain"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jhoan-stiven-3212941b3/"
            target="_blank"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="http://www.github.com/JSV-Lozano" target="_blank">
            <i className="devicon-github-original"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
